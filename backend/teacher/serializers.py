from django.forms import ValidationError
from rest_framework import serializers

from teacher.models import Teacher,Lesson

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('__all__')

class LogLessonSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    def validate_name(self,value):
        if len(value) < 3:
            raise ValidationError("deve ter pelo menos três caracteres")
        return value

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'