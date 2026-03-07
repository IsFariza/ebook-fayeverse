from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from genre.models import Genre
from .models import Book
from reviews.models import Review


User = get_user_model()

class BookTests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            username='fariza', 
            email='fariza@example.com', 
            password='password123'
        )
        cls.genre = Genre.objects.create(name="Computer Science")
        
        cls.book = Book.objects.create(
            title="Django for Pros",
            description="Advanced backend patterns",
            pages=300,
            genre=cls.genre,
            author=cls.user
        )
        cls.url = '/api/books/'

    def test_create_book_auto_author(self):
        self.client.force_authenticate(user=self.user)
        data = {
            "title": "New Book",
            "description": "Auto-author test",
            "pages": 150,
            "genre": self.genre.id
        }
        response = self.client.post(self.url, data)
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['author'], self.user.id)

    def test_book_list_has_average_rating(self):
    
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        self.assertIn('average_rating', response.data[0])

    def test_unauthorized_update(self):
    
        other_user = User.objects.create_user(username='hacker', email='hacker@example.com', password='123')
        self.client.force_authenticate(user=other_user)
        
        update_url = f"{self.url}{self.book.id}/"
        response = self.client.put(update_url, {"title": "Hacked Title"})
        
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)