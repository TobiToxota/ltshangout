from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class User(AbstractBaseUser):
    username = models.CharField(max_length=40, unique=True, blank=True)
    name = models.CharField(max_length=40, blank=False)
    email = models.EmailField(max_length=40, unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    avatarStyle = models.CharField(max_length=40, blank=True)
    avatarIteration = models.IntegerField(default=0)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email
