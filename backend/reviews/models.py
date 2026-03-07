from django.db import models
from users.models import User
from book.models import Book

# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey('book.Book', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'Review by {self.user.username} for {self.book.title}'
        #return f'Review by {self.user.username}'