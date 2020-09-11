# inventaireMiNET
Inventaire MiNET est une possible extension à adh6 dévelopée en Angular (Frontend) et en Flask (Backend)

## Mise en place du server
Il sera plus simple de cloner le projet dans le dossier dans lequel vous voulez stocker voc serveur web. Dossier initial de nginx pour les pages web : ***/var/www/***
### 1. Installation de MySQL et de NGINX
``` sh
$ apt install mysql-server
$ apt install nginx
```

### 2. Installation Environnement Python
Dans le dossier ***inventaireMiNET/backend/*** effectuer les commandes suivantes
``` sh
$ apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools
$ apt install python3-venv
$ python3.7 -m venv backendenv
$ source backendenv/bin/activate
$ pip install wheel
$ pip install uwsgi flask flask-cors
$ pip install pymysql
```

### 3. Connection à MySQL
``` sh
$ mysql -u root -p
```

### 4. Création de l'utilisateur et de la base de donnée
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
Les fichier de configuration serveurs/vhosts de NGINX se trouvent dans ***/etc/nginx/site-available/***
Copie du fichier de configuration du serveur : la partie backend tourne sur le port 8080 et la frontend sur le 8081
#### Creation du service pour gérer le backend et la gestion du python côté serveur
``` sh
$ cp inventaireMiNET/serveur/inventaireMiNET /etc/nginx/site-available/inventaireMiNET
$ ln -s /etc/nginx/sites-available/inventaireMiNET /etc/nginx/sites-enabled

$ cp inventaireMiNET/serveur/inventaireMiNET_backend.service /etc/systemd/system/inventaireMiNET_backend.service
$ systemctl start inventaireMiNET_backend
$ systemctl status inventaireMiNET_backend
$ systemctl enable inventaireMiNET_backend
```

# Backend
## Ajout d'un nouveau type d'objet
Lien pour effectuer la requête : **server_ip*/add_table***

### Arguments pour le POST
**name_table** : chaine de charactere correspondant au nom de la nouvelle table.  
**params** : liste de l'ensemble des paramètres hors ceux commun à tous les objects.  
  
Exemple [jQuery](https://jquery.com/) (en utilisant *$.ajax*):
``` js
type: "POST",
url: "http://127.0.0.1:5000/access",
data: {
  name_table: "test",
  params: ["test1", "test2"]
}
```
  
## Ajout d'un nouvel objet
Lien pour effectuer la requête : **server_ip*/add_obj/nom de la table**
