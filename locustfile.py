from locust import HttpUser, task, between, SequentialTaskSet
import json
import random
import string
import os

# Load backend URL from environment variables or default to a fallback
BACKEND_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://innoverse.acespvgcoet.in")

class RegistrationTasks(SequentialTaskSet):
    def on_start(self):
        # This will run before any task
        print("Starting registration test...")
        self.registered_team_names = set()  # Initialize a set to track registered team names

    def generate_random_data(self):
        first_name = ''.join(random.choices(string.ascii_lowercase, k=8))
        last_name = ''.join(random.choices(string.ascii_lowercase, k=8))
        email = f"{first_name}.{last_name}@example.com"
        mobile = ''.join(random.choices(string.digits, k=10))
        gender = random.choice(["male", "female", "other"])
        institute_name = f"Institute {random.randint(1, 100)}"
        participant_type = random.choice(["student", "faculty"])
        course = f"Course {random.randint(1, 10)}"
        course_specialization = f"Specialization {random.randint(1, 5)}"
        graduation_year = random.randint(2024, 2028)
        is_aces_member = random.choice([True, False])

        # Base64-encoded dummy images for file uploads.
        dummy_image_base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

        return {
            "firstName": first_name,
            "lastName": last_name,
            "email": email,
            "mobile": mobile,
            "gender": gender,
            "instituteName": institute_name,
            "type": participant_type,
            "course": course,
            "courseSpecialization": course_specialization,
            "graduationYear": graduation_year,
            "isAcesMember": is_aces_member,
            "receipt": dummy_image_base64 if is_aces_member else ""
        }

    def generate_unique_team_name(self):
        while True:
            team_name = f"Team-{random.randint(1, 900000)}"  # Increase the range for higher uniqueness
            if team_name not in self.registered_team_names:
                self.registered_team_names.add(team_name)
                return team_name

    @task
    def register_team(self):
        team_size = random.randint(2, 4)
        team_name = self.generate_unique_team_name()  # Get a unique team name
        leader_data = self.generate_random_data()
        team_members_data = [self.generate_random_data() for _ in range(team_size - 1)]

        payload = {
            "teamName": team_name,
            "teamSize": team_size,
            "leader": leader_data,
            "teamMembers": team_members_data,
            "paymentScreenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", #dummy image
            "registrationStatus": "pending"
        }

        headers = {"Content-Type": "application/json"}

        with self.client.post(f"{BACKEND_URL}/api/register", json=payload, headers=headers, catch_response=True) as response:
            if response.status_code == 201:
                response.success()
                print(f"Team registration successful: {team_name}")
            else:
                # If the team name was the issue, we should remove it from registered_team_names so it can be used again
                if "Team name already exists" in response.text:
                    self.registered_team_names.discard(team_name)
                response.failure(f"Team registration failed with status code: {response.status_code}")
                print(f"Team registration failed: {response.text}")

class WebsiteUser(HttpUser):
    tasks = [RegistrationTasks]
    wait_time = between(1, 3)  # Wait between 1 and 3 seconds between tasks
