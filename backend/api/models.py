from django.db import models

class Login(models.Model):
    email=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    
    