# Pruba-Técnica
Proyecto de prueba dedicado a crear una api y consumirla en la parte del front-end

## Comenzando
*Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.*

### Pre-requisitos
*Qué necesitas para instalar el software y cómo instalarlo*
```
NodeJs - Seguir las instrucciones de instalación en https://nodejs.org/en/download/
```
```
Angular - Introducir el siguiente comando en su terminal: npm install -g @angular/cli@latest

```

### Instalación
*sigue este conjunto de pasos para instalar la aplicación*
1. Una vez descargada la raíz del proyecto accede a este en una terminal. Ejemplo: `cd  C:\Users\usuarioEjemplo\Desktop\nombreProyecto`.
2. Acceda a la carpeta 'client' (Ejemplo: `cd nombreProyecto/client`) y ejecute el comando ` npm install`.
3. Vuelva a la raíz del proyecto `cd..`.
4. Acceda a la carpeta 'backend' (Ejemplo: `cd nombreProyecto/backend`) y ejecute el comando `npm install`.
5. Para conectar la aplicación a la base de datos tendrá que crear un archivo '.env' dentro de la carpeta 'backend'.
6. Crear la siguiente variable de entorno dentro de el archivo '.env' : `MONGODB_CNN = mongodb+srv://MEAN_USER:meancontraseña@micluster.2g58v.mongodb.net/tarjetasgraf`

## Levantar la aplicación (Modo Desarrollo)
*Siga esta serie de pasos para levantar la aplicación de manera local en el modo de desarrollo.*

* Para levantar la aplicación acceda a la carpeta 'backend': `cd/backend` y ejecute el siguiente comando `npm start`, también se puede levantar con nodemon a través del comando `npm dev-start`. Ambos comandos levantarán nuestra aplicación en el 'localhost:3800'.
* La parte de angular se puede levantar de manera independiente accediendo a su carpeta: `cd client` desde la raiz del proyecto, y ejecutando el siguiente comando: `ng serve`. Pero **recuerda, la parte del backend debe de estar levantada** para consumir la base de datos, de lo contrario no se prooverá la lista de tarjetas. 

## Ejecutando pruebas
*Pruebas para el testeo de la api*
1. Para ejecutar las pruebas accede a la carpeta backend: `cd/backend` y corre el comando `npm test`



