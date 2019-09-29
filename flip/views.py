from django.shortcuts import render
from django.http import JsonResponse
from flip.models import Skill
from flip.serializers import SkillSerializer
from rest_framework import generics
from flip.utils.json_creator.creator import createJson
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render_to_response

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


@api_view(['POST'])
def compare(request):
    if request.method == "POST":

        job_text = request.data.get('job_text')
        resume_text = request.data.get('resume_text')
        dic = createJson(job_text, resume_text)
        return JsonResponse(dic, safe=False)

    else:
        return JsonResponse({"status": False}, safe=False)


def handler404(request, exception, template_name="404.html"):
    response = render_to_response("404.html")
    response.status_code = 404
    return response


def handler500(request):
    response = render_to_response("500.html")
    response.status_code = 500
    return response
