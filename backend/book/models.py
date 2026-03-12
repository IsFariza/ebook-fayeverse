from django.db import models
from users.models import User
from genre.models import Genre

class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    pages = models.IntegerField()
    
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    created_at = models.DateTimeField(auto_now_add=True)
    cover_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.title