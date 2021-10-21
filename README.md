# EJEMPLO PRACTICO
https://www.youtube.com/watch?v=fhRtAYTF6vk&t=99s

# DESCARGAR CONTENEDOR MARIADB, EJECUTAR COMO UN PROCESO, CONTRASEÑA EN VARIABLE DE ENTORNO
docker run -p 3307:3306 -d --name mariadb -e MYSQL_ROOT_PASSWORD=mypassword mariadb/server:10.4
