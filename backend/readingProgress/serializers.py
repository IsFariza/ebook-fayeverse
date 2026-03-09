from rest_framework import serializers
from .models import ReadingProgress
from django.contrib.auth import get_user_model


User = get_user_model()

class ReadingProgressSerializer(serializers.ModelSerializer):
    percentage = serializers.ReadOnlyField()

    class Meta:
        model = ReadingProgress
        fields = ['id', 'book', 'current_page', 'percentage', 'is_completed', 'updated_at']
        read_only_fields = ['is_completed', 'updated_at']

    def create(self, validated_data):
        user = self.context['request'].user
        book = validated_data['book']
        incoming_page = validated_data['current_page']

        progress, created = ReadingProgress.objects.get_or_create(
            user=user, 
            book=book
        )

        if incoming_page > progress.current_page:
            progress.current_page = incoming_page
            progress.save()
        
        return progress