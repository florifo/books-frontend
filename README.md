Book's App
=========

Book es una aplicación HTML5 que nos permetiría:

  - obtener bases solidas de Javascript
  - Aprender a visualizar los proyectos de manera modular
  - aprender a convertir un psd a HMTL5 y CSS3 bajo el concepto de "sitio responsivo" 
  - trabajar con flujos reales
  - usar la metodologia agile para el proceso de desarrollo
  - optimización del proceso de desarrollo, calidad y produción

Book va hacer una pequeña aplicación que listará todos los libros de tecnología que esten en papel. Una vez un usuario este logeado podrá saber quién esta leyendo algún libro de interés o podrá reservar un libro para leerlo.

Version
----

1.0

Tech
-----------

Estas son las tecnologías que usaremos:

* Grunt / Gulp - organizador de tareas
* Bower        - manejador de dependencias frontend
* SASS / LESS  - pre compilador de css

## Frontend - Sprint 1

Lineamientos del primer sprint:

- crear un repositorio en su cuenta de github llamado "books-frontend" para el frontend
- instalar nodejs
- utilizar la estructura de archivos sugerida por [boilerplate](https://github.com/h5bp/html5-boilerplate)
- crear un archivo de configuración de Grunt o Gulp que permita:
    - correr SASS / LESS
    - generar dinámicamente prefijos de selectores propietarios
    - Refinar la estructura final de los CSS con base al orden de los selectores (ej: CSScomb) 
    - minificar y concatenar Javascript / CSS
    - recargar el browser después de un cambio
    - preview server
- usar Bower para manejar las dependencias

Nota: considerar el uso de linternas dentro del IDE de su preferencia.

## Frontend - Sprint 2

Migrar el diseño proporcionado en el archivo pdf a HTML5 y CSS3 responsivos. No esta permitido el uso de frameworks de front-end como Bootstrap o Zurb Foundation, a no ser que se trate de un startup (ej: [skeleton](http://www.getskeleton.com/)) o complementos como [compass](http://compass-style.org/).

Antes de empezar con este sprint se deberá crear un tag en el repositorio llamado "sprint-2". Ej:
```sh
git tag sprint-2 -m 'ej: PSD to HTML'
git push --tags #sube los cambios al branch remoto (github)
```

El código resultante debe contemplar al menos 3 breakpoints:

- desktop
- tablet
- mobile

## Frontend - Sprint 3

Configurar un servidor falso con [json-server](https://www.npmjs.com/package/json-server) para simular la interación (solicitud y envío de datos) con un equipo remoto.

Antes de empezar con este sprint se deberá crear un tag en el repositorio llamado "sprint-3". Ej:
```sh
git tag sprint-2 -m 'ej: JS'
git push --tags #sube los cambios al branch remoto (github)
```

Inclusión de Javascript para las funcionalidades que lo requieran:

- login
- Filtro de búsqueda por título y autor
- reservar un libro
- consultar disponibilidad de un libro

No puede utulizarse JQuery.
