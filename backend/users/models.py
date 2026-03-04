from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, bio='', role=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')
        if role is None:
            role = User.Roles.READER

        email = self.normalize_email(email)
        is_active = extra_fields.get('is_active', True)
        user = self.model(username=username, email=email, role=role, bio=bio, is_active=is_active, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        user = self.create_user(username, email, password, role=User.Roles.ADMIN, **extra_fields)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    class Roles(models.TextChoices):
        READER = 'reader', 'Reader'
        WRITER = 'writer', 'Writer'
        MODERATOR = 'moderator', 'Moderator'
        ADMIN = 'admin', 'Admin'

    username = models.CharField(max_length=128, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    role = models.CharField(max_length=10, default=Roles.READER, choices=Roles.choices)
    bio = models.TextField(blank=True, null=True)

    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username