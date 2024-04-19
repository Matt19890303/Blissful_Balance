from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate, logout
from .forms import SignUpForm, LoginForm
from django.contrib.auth.forms import UserCreationForm




def home(request):
    return render(request, 'home.html')

def anxiety(request):
    return render(request, 'anxiety.html')

def ocd(request):
    return render(request, 'ocd.html')

def dpdr(request):
    return render(request, 'dpdr.html')

def support_us(request):
    return render(request, 'support_us.html')

def articles (request):
    return render(request, 'articles.html')

def signup(request):
  form = SignUpForm()
  if request.method == 'POST':
    form = SignUpForm(request.POST)
    if form.is_valid():
      user = form.save() 
      login(request, user)
      return redirect('home')
  return render(request, 'signup.html', {'form': form}) 

def login_view(request):
  form = LoginForm()
  if request.method == 'POST':
    form = LoginForm(request.POST)
    if form.is_valid():
      username = form.cleaned_data['username']
      password = form.cleaned_data['password']
      user = authenticate(request, username=username, password=password)
      if user is not None:
        login(request, user)
        return redirect('home')
  return render(request, 'login.html', {'form': form})