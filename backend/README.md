# inventaireMiNET
Inventaire MiNET est une possible extension à adh6 dévelopée en Angular (Frontend) et en Flask (Backend)

## Mise en place du server
### 1. Installation de MySQL et de NGINX
``` sh
$ apt install mysql-server
$ apt install nginx
```

### 2. Connection à MySQL
``` sh
$ mysql -u root -p
```

### 3. Création de l'utilisateur et de la base de donnée
``` sh
$ mysql> CREATE DATABASE inventaireMiNET;
$ mysql> CREATE USER 'MiNET'@'localhost' IDENTIFY BY 'password';
$ mysql> GRANT ALL ON inventaireMiNET.* TO 'MiNET'@'localhost';
$ mysql> FLUSH PRIVILEGES;
$ mysql> exit;
```
## Initialization de la Base de données
``` sh
$ mysql -u root -p
$ mysql> USE inventaireMiNET;
$ mysql> CREATE TABLE IF NOT EXIST inventaire(
$      > id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
$      > available boolean NOT NULL DEFAULT 1,
$      > comment VARCHAR(255));
$ mysql> exit;
```
