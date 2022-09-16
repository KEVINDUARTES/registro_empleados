# registro_empleados

-Proyecto con las funcionalidades de poder agregar, registrar y editar empleados.

Nota:

Para el uso de la aplicación debes descargar y/o clonar el proyecto.
Este proyecto esta dividido en dos carpetas principales: api y client.

Dentro de la carpeta client encontrarán todo lo referido al frontend.
Para instalar las dependencias debes ejecutar el comando npm install
Para correr el mismo debes ejecutar el script/comando npm start
Este cliente corre en el puerto:3000

Dentro de la carpeta api encontrarán todo lo referido al backend.
Para instalar las dependencias debes ejecutar el comando npm install.
Para correr el servidor debes ejecutar el script/comando npm start.
Este servidor corre en el puerto:5000

-Tecnologias utilizadas: Node.js, React.js, Express, Css, Html, Boostrap, Mongoose, Mongodb.

Manejo de rutas :

USUARIO
Post:'http://localhost:5000/api/usuario/aunthenticate'  
Post: 'http://localhost:5000/api/usuario/register'

EMPLEADO
Post: 'http://localhost:5000/api/empleado/agregarempleado'
Put: 'http://localhost:5000/api/empleado/actualizarempleado'
Delete: 'http://localhost:5000/api/empleado/borrarempleado'
Get: 'http://localhost:5000/api/empleado/obtenerempleados'
