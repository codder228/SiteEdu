from django.shortcuts import render


# Create your views here.
def index(request):
    context = {"title": "RateYourGames - Главная", "content": "Главная страница сайта"}
    return render(request, "index.html", context=context)


def about(request):
    context = {"title": "О нас", "content": "О нас"}
    return render(request, "about.html", context=context)
