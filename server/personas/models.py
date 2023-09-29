from django.db import models

# Create your models here.


class Person(models.Model):
    usuario = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)
    
    def __str__(self):
        return self.usuario