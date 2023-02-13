# Crear proyecto

Vamos a usar una herramienta llamada **create-react-app**, escribiendo `npx create-react-app <project name>`.

# Estructura

- `public`: almacena todo lo relacionado con **HTML**, y donde react cargara todo lo que hagamos hagamos con **JavaScript**.

- `src`: almacena todo lo relacionado con React (lo que hagamos con el).
    - Como vamos a trabajar en la **web**, lo vamos a especificar importando `react-dom/client` (Document Object Model).

    > Tenemos que hacer esto por que React también es usado para desarrollar interfaces para aplicaciones de escritorio y móviles.

> Cuando terminemos de hacer nuestra aplicación, podemos escribir `npm run build` para "compilar" nuestra aplicación (generando un directorio `build` que contiene una version de nuestro proyecto optimizada para desplegarse).

# Componentes

Son pequeñas partes de una interfaz mas grande (un todo, que seria el `root`), la razón de que lo implantemos asi es por su reutilizabilidad.

- Su implementación es a traves de funciones que siempre retornan una interfaz.

- Para que el código se interprete  usamos `{...}`.

- A las etiquetas que en su declaración no necesitan una apertura se les llama **self closing tags**.

- Estamos usando una sintaxis `JSX` (combinación de **JavasScript** con **HTML**).

- Podemos crear contenedores vacíos usando la etiqueta **Fragment** (`<> </>`)

- Debemos nombrar nuestros componentes con la primera letra en mayúscula (**Pascal case**), para diferenciarlos de las etiquetas de `HTML`.

- Usamos la extension `.JSX` para diferenciar a los archivos que contiene componentes (es opcional).

- `props` son las propiedades con la que creamos nuestros módulos (`<module <prop> = <value>/>`)

- Cuando queremos definir los tipos de nuestras `props` hacemos uso de `prop-types`

- Podemos crear componentes usando clases.

- El `key` lo debe tener el elemento padre.

- `const [<variable>, <update function>] = useState(<initial value>)`

- `useEffect(<function>, [<dependencies>])` si ponemos en las dependencia `[]` se ejecutara cuando se cree el componente, si no ponemos dependencias se ejecutara cuando algo cambie en el componente donde lo declaramos.

- Para crear un proyecto con vite usamos el comando `npm create vite` (si no lo tenemos descargado, nos pedirá que lo hagamos).

- Usamos `React.StrictMode` para que React nos de recomendaciones sobre el código que escribimos.

- **prop dealing**, ocurre cuando un padre tiene los estados y tenemos que pasárselo a sus hijos. Para solucionarlo usamos **contextos**.

- Para hacer el despliegue antes de subirlo debemos instalar el paquete [`gh-pages`](https://www.npmjs.com/package/gh-pages) y seguir los pasos descritos en esta [pagina](https://vitejs.dev/guide/static-deploy.html) (en **Command Line Utility**).

> Para crear un proyecto en **Vite**, encontraremos todo en el [getting started](https://vitejs.dev/guide/).