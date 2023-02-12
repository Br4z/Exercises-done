# Backend

1. Vamos a ejecutar el comando `npm init -y`
2. Instalamos los siguientes paquetes:
    - Express (framework de node)
    - Morgan (ver peticiones)
    - Cors (para unir servidores en dominios distintos)
    - Pg (para conectarnos con Postgresql)

    > `npm i express morgan cors`

    Ahora instalamos `nodemon`, de forma independiente con `npm i nodemon -D`.

    > Las `dependencies` son las dependencias del proyecto en general y las `devDependencies` son las dependencias que usamos en el desarrollo de la aplicacion.
3. Ahora definimos la estructura de archivos

    - Creamos la carpeta `src` donde estará nuestro `index.js` para lanzar nuestra aplicación.
    - Creamos la carpeta `src/routes` y un archivo `task.routes.js` dentro de ella.
        > Definir las rutas (`URL`).
    - Creamos la carpeta `src/controllers` y un archivo `task.controller.js` dentro de ella.
        > Definir que pasa cuando una `URL` es visitada.
    - Creamos nuestro archivo de configuración `config.js` en el `src`.
    - Creamos la carpeta `database` y un archivo `db.sql` en ella.

- Para ejecutar scripts definidos en nuestro `package.json` usamos el comando `npm run <script name>`.
- Las consultas a la base de datos retornan un objeto con información de la consulta.
- Tenemos que usar `try{...} catch{...}` para que el servidor no se caiga si ocurre algo inesperado.
- El `id` serializado de nuestra relación `task` aumenta, asi la creación de una registro falle.
- Para mayor seguridad de nuestra información, podemos usar variables de entorno.
    Instalamos `dotenv`, con `npm i dotenv`.

# Frontend

- Ejecutamos el comando `npx create-react-app client`
- Para mejorar el rendimiento de VSC podemos ignorar archivos (también carpetas) configurando las preferencias del **workspace**.
- Para navegar crear rutas y navegar entre ellas instalamos `react-router-dom`.
- El `client` se ejecuta en el puerto 3000.
- Vamos a utilizar un conjunto de componentes predefinidos (**MaterialIU**).
    > Procurar hacerlo en la carpeta `client`.

    - Importamos iconos en formato SVG que llamaremos con código.
