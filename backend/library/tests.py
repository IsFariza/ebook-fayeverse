from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from .models import Library
import json
User = get_user_model()

class LibraryTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', email='user@example.com', password='123456')
        Library.objects.create(user=cls.user, name='My Books', is_public=True)

        cls.client=Client()
        cls.client.login(username='user', password='123456')

        cls.url = '/api/libraries/'
        cls.response = cls.client.get(cls.url)

    def test_library_list_status(self):
        self.assertEqual(self.response.status_code, 200)
        
    def test_library_list_content(self):
        data = json.loads(self.response.content)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'My Books')
