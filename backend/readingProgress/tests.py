from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from book.models import Book, Genre  # Adjust if your app name is 'books'

# User = get_user_model()

# class ReadingProgressTests(APITestCase):
#     def setUp(self):
#         self.user = User.objects.create_user(username='tester', email='test@example.com', password='password123')
#         self.client.force_authenticate(user=self.user)

#         self.genre = Genre.objects.create(name="Sci-Fi")
#         self.book = Book.objects.create(
#             title="Dune", 
#             pages=500, 
#             genre=self.genre,
#             author=self.user
#         )
        
#         self.url = reverse('progress-list')

#     def test_sync_new_progress(self):
#         data = {"book": self.book.id, "current_page": 50}
#         response = self.client.post(self.url, data)
        
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(response.data['current_page'], 50)
#         self.assertEqual(response.data['is_completed'], False)

#     def test_race_condition_highest_page_wins(self):
        
#         self.client.post(self.url, {"book": self.book.id, "current_page": 50})

#         data = {"book": self.book.id, "current_page": 10}
#         response = self.client.post(self.url, data)

#         self.assertEqual(response.data['current_page'], 50)
        
#     def test_auto_completion(self):
       
#         data = {"book": self.book.id, "current_page": 500}
#         response = self.client.post(self.url, data)
        
#         self.assertEqual(response.data['is_completed'], True)
#         self.assertEqual(response.data['current_page'], 500)

#     def test_cannot_exceed_total_pages(self):
       
#         data = {"book": self.book.id, "current_page": 999} 
#         response = self.client.post(self.url, data)
        
#         self.assertEqual(response.data['current_page'], 500)
#         self.assertEqual(response.data['is_completed'], True)