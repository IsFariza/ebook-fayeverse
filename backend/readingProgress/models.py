from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator

class ReadingProgress(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reading_progresses')
    book = models.ForeignKey('book.Book', on_delete=models.CASCADE, related_name='user_progress')
    
    current_page = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])
    is_completed = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'book')
        verbose_name = "Reading Progress"
        verbose_name_plural = "Reading Progresses"

    def __str__(self):
        return f"{self.user.username} - {self.book.title}: Page {self.current_page}"

    def save(self, *args, **kwargs):
       
        if self.book.pages > 0 and self.current_page >= self.book.pages:
            self.current_page = self.book.pages  
            self.is_completed = True
        else:
            self.is_completed = False
            
        super().save(*args, **kwargs)