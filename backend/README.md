# inventaireMiNET
Inventaire MiNET est une possible extension à adh6 dévelopée en Angular (Frontend) et en Flask (Backend)

## Mise en place du server
Il sera plus simple de cloner le projet dans le dossier dans lequel vous voulez stocker voc serveur web. Dossier initial de nginx pour les pages web : ***/var/www/***
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

## Initialization de la Base de données (peut-être plus de param)
``` sh
$ mysql -u root -p
$ mysql> USE inventaireMiNET;
$ mysql> CREATE TABLE IF NOT EXIST inventaire(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, available boolean NOT NULL DEFAULT 1, comment VARCHAR(255));
$ mysql> exit;
```

## Démarrage du server
Tous les fichier de configuration se trouvent dans le dossier *serveur* qui se trouve dans la racine.
Les fichier de configuration serveurs/vhosts de NGINX se trouvent dans [***/etc/nginx/site-available/***](file:///etc/nginx/site-available/)

#### Creation du service pour gérer le backend et la gestion du python côté serveur
``` sh
$ cd inventaireMiNET

# Backend
``` python
from flask import Flask, jsonify, request
import pymysql
from flask_cors import CORS
```

La fonction ***add_table*** permet selon si on choisit *obj* ou *table* d'ajouter un objet ou un nouveau type d'objet (ex: switch, clavier, ...)
