from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework import status
from .serializer import NightOutSerializer, ParticipantSerializer, ParticipantDateSerializer, DateSuggestionSerializer
from django.http import Http404
from django.contrib.auth import get_user_model

from nightout.models import NightOut, Participant, ParticipantDate, DateSuggestion

User = get_user_model()


@permission_classes((IsAuthenticated,))
class NightOutList(APIView):
    """Get all nightouts the user is owning or participating in or create a new nightout"""


    def get(self, request, format=None):
        nightouts = NightOut.objects.filter(
            creator=request.user) | NightOut.objects.filter(participants=request.user)
        serializer = NightOutSerializer(nightouts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request, format=None):
        serializer = NightOutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creator=request.user, title=request.data['title'])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NightOut(APIView):
    """Get a single nightout, edit it or delete it"""


    # try to get the object, if not possible return 404
    def get_object(self, pk, request):
        try:

            # only return the nightout if the user is the creator or a participant
            return NightOut.objects.filter(pk=pk).filter(creator=request.user | NightOut.objects.filter(participants=request.user))
        except NightOut.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        nightout = self.get_object(pk, request)
        serializer = NightOutSerializer(nightout, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        nightout = self.get_object(pk, request)
        serializer = NightOutSerializer(nightout, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        nightout = self.get_object(pk, request)
        nightout.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
