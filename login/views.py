from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.http import HttpRequest, HttpResponse

def login_view(request:HttpRequest) -> HttpResponse:
    if request.method=='POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username = username, password = password)

        if user is None:
            print('Все не правильно')
        else: 
            login(request, user)
            return redirect('/')
        
    return render(request, 'login/login.html')
