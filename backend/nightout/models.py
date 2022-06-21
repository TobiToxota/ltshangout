from django.db import models
from django.conf import settings


class NightOut(models.Model):
    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=40, )
    description = models.CharField(max_length=200, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    startTime = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title + " - " + self.creator.username + " - " + str(self.createdAt) + " - " + str(self.id)


class DateSuggestion(models.Model):
    nightOut = models.ForeignKey(
        NightOut, on_delete=models.CASCADE, related_name="suggestedDates")
    date = models.DateField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.date) + " - " + str(self.nightOut.title) + " - " + str(self.nightOut.creator.username)


class Participant(models.Model):
    nightOut = models.ForeignKey(
        NightOut, on_delete=models.CASCADE, related_name="participants")
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user.username) + " - " + str(self.nightOut.title) + " - " + str(self.nightOut.creator.username)
