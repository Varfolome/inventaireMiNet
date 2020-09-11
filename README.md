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
``` sql
 CREATE DATABASE inventaireMiNET;
 CREATE USER 'MiNET'@'localhost' IDENTIFY BY 'password';
 GRANT ALL ON inventaireMiNET.* TO 'MiNET'@'localhost';
 FLUSH PRIVILEGES;
 exit;
```

## Initialization de la Base de données (peut-être plus de param)
``` sql
$ mysql -u root -p
 USE inventaireMiNET;
 CREATE TABLE inventaire(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, available bool NOT NULL DEFAULT 1, comment VARCHAR(255));
 exit;
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
Lien pour effectuer la requête : **server_ip** ***/add_table***

### Arguments pour le POST
**name_table** : chaine de charactere correspondant au nom de la nouvelle table.  
**params** : liste de l'ensemble des paramètres hors ceux commun à tous les objects.  
  
## Ajout d'un nouvel objet
Lien pour effectuer la requête : **server_ip** ***/add_obj/nom de la table***

## Récupération des données pour l'affichage des objets d'un même type
Lien pour effectuer la requête : **server_ip** ***/access***

### Arguments pour le POST
**name_table** : chaine de charactère correspondant à la table à afficher

### Format de la réponse
``` json
{
  "name_table":"test",
  "name_params":[
    "id",
    "test1",
    "test2"
  ],
  "result":[
    {"id":1,"test1":"val11","test2":"val12"},
    {"id":2,"test1":"val21","test2":"val22"}
  ],
  "types":[
    "int",
    "varchar(255)",
    "varchar(255)"
  ]
}
```
