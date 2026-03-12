from django.db import models
from users.models import User
<<<<<<< HEAD
# from books.models import Book
=======
from book.models import Book
>>>>>>> feat/book-library-readingProgress-models

# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
<<<<<<< HEAD
    # book = models.ForeignKey('books.Book', on_delete=models.CASCADE)
=======
    book = models.ForeignKey('book.Book', on_delete=models.CASCADE)
>>>>>>> feat/book-library-readingProgress-models
    rating = models.IntegerField()
    comment = models.TextField(blank=True, null=True)

    def __str__(self):
<<<<<<< HEAD
        # return f'Review by {self.user.username} for {self.book.title}'
        return f'Review by {self.user.username}'
=======
        return f'Review by {self.user.username} for {self.book.title}'
        #return f'Review by {self.user.username}'
>>>>>>> feat/book-library-readingProgress-models
