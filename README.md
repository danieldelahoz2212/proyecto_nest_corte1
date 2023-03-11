<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
Instrucciones 
primero debes tener instalados los programas indispensables tanto para visaulizar como para modificar el sistema:
  NodeJs
  NPM
  Git
  visual studio code

luego vamos a ir instalando librerias, extenciones y modulos
esto lo hacemos, abriendo la herramienta visual studio code, yendo a la parte de terminal (en la parte superior) y copiando los siguientes codigos una vez se abra la ventana emergente del terminal:
  CLI de NestJs: npm i -g @nestjs/cli
  
luego de eso se clona el repositorio:
  git clone https://github.com/danieldelahoz2212/proyecto_nest_corte1.git

luego de esto continuamos con la instalacionde los modulos, librerias y mas:
esto tambien se hace en la terminal antes mencionada
npm install

teniendo todo instalados se inicia el servidor de ésta manera:
npm run start:dev

Ahora puedes probar el "Login" ó inicio de sesion utilizando tu cliente favorito como Postman o Thunder Client y en la url agregas:
Nota: Recuerda que debes seleccionar el metodo POST

http://localhost:3000/auth
En el body: debes ingresar un username y un password Especificamente hay uno preestablecido para que sea más facil

Solo usa un json de esta forma

{
  "username": "juan.loquesea",
  "password": "162426"
}

Si le das a enviar, encontrarás que la respuesta del servidor te da un token de acceso con éste token podrás acceder a los diferentes endpoints de la aplicacion

este seria el paso a paso para visualizar las funciones realizadas en este sistema