from django.test import TestCase, Client
from .models import Genre

# Create your tests here.

# class GenreTests(TestCase):
#     @classmethod
#     def setUpClass(cls):
#         super().setUpClass()
#         url = '/api/genres/'
#         client = Client()
#         cls.response = client.get(url)
    
#     def test_list_genres(self):
#         self.assertEqual(self.response.status_code, 200)
