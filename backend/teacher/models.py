from pyexpat import model
from unittest.util import _MAX_LENGTH
from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100,null=False,blank=False)
    value_per_hour = models.DecimalField(
        max_digits=9, decimal_places=2, null=False, blank=False
    )
    description = models.TextField(null=False, blank=False)
    pic = models.URLField(max_length=255,null=False,blank=False)

class Lesson(models.Model):
    name = models.CharField(max_length=100,null=False,blank=False)
    email = models.EmailField(max_length=255,null=False,blank=False)
    teacher = models.ForeignKey(to=Teacher, 
    on_delete=models.CASCADE, 
    related_name="lessons", 
    null=False,
    blank=False)


