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
Post:'http://localhost:5000/api/usuario/aunthenticate' ejemplo para probar en postman:{"nombre": "", "apellido": "", "email": "", "contraseña": ""}
Post: 'http://localhost:5000/api/usuario/register' ejemplo para probar en postman: { "email": "", "contraseña": ""}

EMPLEADO
Post: 'http://localhost:5000/api/empleado/agregarempleado' ejemplo para probar en postman: {"nombre": "", "area": "", "email": "", "puesto": "" , "telefono": ""}
Put: 'http://localhost:5000/api/empleado/actualizarempleado'ejemplo para probar en postman {"nombre": "", "email": "", "area": "", "puesto": "" , "telefono": ""}
Delete: 'http://localhost:5000/api/empleado/borrarempleado' ejemplo para probar en postman
Get: 'http://localhost:5000/api/empleado/obtenerempleados'
