from rest_framework import serializers, validators
from django.contrib.auth import get_user_model
from models import NightOut, Participant, ParticipantDate, DateSuggestion

class NightOutSerializer(serializers.Serializer):
    class Meta:
        model = NightOut
        fields = '__all__'

    def create(self, validated_data):
        return NightOut.objects.create(**validated_data)


class ParticipantSerializer(serializers.Serializer):
    class Meta:
        model = Participant
        fields = '__all__'

    def create(self, validated_data):
        return Participant.objects.create(**validated_data)


class ParticipantDateSerializer(serializers.Serializer):
    class Meta:
        model = ParticipantDate
        fields = '__all__'

    def create(self, validated_data):
        return ParticipantDate.objects.create(**validated_data)


class DateSuggestionSerializer(serializers.Serializer):
    class Meta:
        model = DateSuggestion
        fields = '__all__'

    def create(self, validated_data):
        return DateSuggestion.objects.create(**validated_data)

