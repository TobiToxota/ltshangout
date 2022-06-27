from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView
from .serializer import RegisterSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'access': str(refresh.access_token),
        'refresh': str(refresh),
    }


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["username"] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegistrationView(CreateAPIView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        tokens = get_token_for_user(serializer.instance)
        response = {
            "refresh": tokens["refresh"],
            "access": tokens["access"],
        }
        

        return Response(response, status=status.HTTP_201_CREATED)


@api_view(["GET"])
def getRoutes(request):

    routes = [
        "/api/token",
        "/api/token/refresh",
        "/api/register",
        "/api/nightoutlist/",
        "/api/nightout/<pk>",
    ]

    return Response(routes)