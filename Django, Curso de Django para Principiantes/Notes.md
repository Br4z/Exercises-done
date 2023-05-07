# Pasos previos

- Instalar [Python](https://www.python.org/downloads/)
- Verificar que tenemos Python y pip

    ```
    python --version -> Ver la versión de Python instalada
    pip --version    -> Ver la versión de pip instalada
    ```

# Entornos virtuales

Nos permiten tener por proyecto

- Una versión de python
- Una versión de pip
- Paquetes

> Con el fin de aislar nuestros proyectos para que no haya interferencias.

---

1. Instalamos un gestor de entornos virtuales: `pip install virtualenv`

    > En caso de estar en Arch `pacman -S python-virtualenv`

2. Inicializamos el entorno virtual en la carpeta donde vayamos a tener un proyecto: `virtualenv env`

3. Abrimos el proyecto con VSC y seleccionamos el intérprete del entorno virtual (con la paleta de comandos)

    > Si queremos entrar manualmente podemos escribir `. \venv\Scripts\activate`.

4. Instalamos Django:  `pip install django`

    Para comprobar que se ha instalado correctamente escribimos `django-admin --version` o `python -m django --version` debería mostrarnos la versión.

    Otra forma de comprobar si está instalado es escribiendo:

    ```python
    import django
    django.get_version()
    ```

    en el intérprete de Python.

# Crear proyecto

- Crear un proyecto: `django-admin startproject <name> .`

    > Es recomendable no usar nombres reservados.

- Correr proyecto: `python manage.py runserver <port>`

    > Por defecto corre en el puerto 8000.

# Estructura de un proyecto

- `manage.py`: contiene comandos administrativos.
- `db.sqlite3`: base de datos para testing.
- `<project folder>`: donde se almacena nuestro proyecto.

# Creación de apps

- Django maneja algo llamado apps, que se definen como ciertas funcionalidades juntas.

- Podemos crear una con el comando `python manage.py startapp <app name>`.

    > Cada vez que creemos una app, junto con ella se creara una carpeta.

- Desde la carpeta de nuestro proyecto podremos llamar a las apps que hayamos creado

# Estructura de una app

Django ya viene con un módulo para interactuar con la base de datos.

# Modelos y bases de datos con Sqlite3

-  Escribimos los comandos `python manage.py makemigrations <app name>?` y `python manage.py migrate <app name>?` para que el proyecto detecte los nuevos modelos que hayamos creado.

    > Para ver el contenido del archivo `db.sqlite3` podemos usar el programa [DB Browser for SQLite](https://sqlitebrowser.org/dl/)

# Django Shell

- `python manage.py shell`

```python
from myapp.models import Project, Task

project = Project(name = "My first project")

project.save() # Add a register in the database

Project.objects.all() # Get all register in the table

Project.objects.get(id = 1) # Get a specific register in the table

project.task_set.all() # Get task related to a project

project.task_set.create(title = "My first task") # Add a task to a project (through its foreign key)

project.task_set.get(id = 1) # Get a specific task from a project

Projects.objects.filter(name__startwith = "application") # An get without an error
```

# Django admin

- Podemos acceder al panel administrativo a través de la ruta `admin/`.

    > Podemos escribir `python manager.py createsuperuser` para crear un usuario.

- Para que en el panel los nombres de los objetos que hayamos sean más descriptivos, podemos crear el método `__str__` para las clases.

# Static files

Son archivos que el servidor no procesa (por ejemplo un los archivos `.css`).