Book's App
=========

Book es una aplicación HTML5 que nos permetiría:

  - obtener bases solidas de Javascript
  - Aprender a visualizar los proyectos de manera modular
  - aprender a convertir un psd a HMTL y CSS bajo el concepto de "sitio responsivo" 
  - trabajar con flujos reales
  - usar la metodologia agile para el proceso de desarrollo
  - optimización del proceso de desarrollo, calidad y produción

Book va hacer una pequeña aplicación que soportara todos los browser llamados [Evergreen](http://eisenbergeffect.bluespire.com/evergreen-browsers/). Listará todos los libros de tecnología, una vez un usuario este logeado podrá saber quién esta leyendo algún libro de interés o podrá reservar un libro para leerlo.

Version
----

1.0

Tech
-----------

Estas son las tecnologías que usaremos:

* CSS reset (escoger)
* Box-sizing (definir)
* Grunt / Gulp / webpack / browserify - organizador de tareas
* Bower        - manejador de dependencias frontend
* SASS / LESS  - pre compilador de css
* Loadsh / underscore  
* Font Awesome / SVGs
* Grid (Susy, Bourbon Neat)

## Frontend - Sprint 1

Lineamientos del primer sprint:

- crear un repositorio en su cuenta de github llamado "books-frontend" para el frontend
- instalar nodejs
- definir la estructura de archivos. Por ejemplo [boilerplate](https://github.com/h5bp/html5-boilerplate)
- crear una tarea (**default** | **server**) que permita:
    - correr SASS / LESS
    - Jslint
    - recargar el browser después de un cambio (*browser-sync)
    - levantar servidor local
- crear otra tarea para la optimizacion de los assets (**build**): 
    - generar dinámicamente prefijos de selectores propietarios
    -  minificar y concatenar Javascript / CSS
- usar Bower para manejar las dependencias

Nota: considerar el uso de linternas dentro del IDE de su preferencia.

## Frontend - Sprint 2

Migrar el diseño proporcionado en el archivo PSD a HTML y CSS responsivos. No esta permitido el uso de frameworks de front-end como Bootstrap o Zurb Foundation. Complementos como [compass](http://compass-style.org/), [Bourbon](http://bourbon.io/).

Antes de empezar con este sprint se deberá crear un tag en el repositorio llamado "sprint-2". Ej:
```sh
git tag sprint-2 -m 'ej: PSD to HTML'
git push --tags #sube los cambios al branch remoto (github)
```

El código resultante debe contemplar al menos 3 breakpoints:

- desktop | tablet | mobile

## Frontend - Sprint 3

Configurar un servidor falso con [json-server](https://www.npmjs.com/package/json-server) para simular la interación (solicitud y envío de datos) con un equipo remoto.

Antes de empezar con este sprint se deberá crear un tag en el repositorio llamado "sprint-3". Ej:
```sh
git tag sprint-3 -m 'ej: JS'
git push --tags #sube los cambios al branch remoto (github)
```

Inclusión de Javascript para las funcionalidades que lo requieran:

- login
- Filtro de búsqueda por título y autor
- reservar un libro
- consultar disponibilidad de un libro

No puede utilizarse JQuery.
