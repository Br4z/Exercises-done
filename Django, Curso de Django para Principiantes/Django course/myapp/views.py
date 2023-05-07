from django.shortcuts import redirect, render, get_object_or_404
from django.http import HttpResponse
from .models import Project, Task
from .forms import CreateNewTask, CreateNewProject

# Create your views here.
def index(request):
    title = 'Django course'
    return render(request, 'index.html', {
        'title': title
    })

def hello(request, username):
    return HttpResponse('<h1>Hello %s</h1>' % username)

def about(request):
    return render(request, 'about.html')

# --------------------------------- Projects --------------------------------- #

def projects(request):
    projects = Project.objects.all()
    return render(request, 'projects/list.html', {
        'projects': projects
    })

def create_project(request):
    if request.method == 'GET':
        return render(request, 'projects/create.html', {
            'form': CreateNewProject
        })
    else: # Post
        Project.objects.create(name = request.POST['name'])
        return redirect('projects')

def project_details(request, id):
    project = get_object_or_404(Project, id = id)
    tasks = Task.objects.filter(project_id = id)
    return render(request, 'projects/details.html', {
        'project': project,
        'tasks': tasks
    })

# ----------------------------------- Tasks ---------------------------------- #

def tasks(request):
    tasks = Task.objects.all()
    return render(request, 'tasks/list.html', {
        'tasks': tasks
    })

def create_task(request):
    if request.method == 'GET':
        return render(request, 'tasks/create.html', {
            'form': CreateNewTask
        })
    else: # Post
        Task.objects.create(title = request.POST['title'],
                            description = request.POST['description'],
                            project_id = 1)
        return redirect('tasks')
