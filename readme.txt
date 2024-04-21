Proyecto

-Desde la consola de comando ejecutar el siguiente comando correr el servicio
npm run dev 

Database--

Si la conexion a la base de datos da este mensaje 
Client does not support authentication protocol requested by server; consider upgrading MySQL client
Ejecuta los siguientes comandos directamente en la base de datos:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
Luego ejecutar,
flush privileges;

