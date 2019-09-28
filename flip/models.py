"""
Contains models for every skill in the database
"""
from django.db import models


class Skill(models.Model):
    """
    Model for soft and hard skills
    """
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "skills"
