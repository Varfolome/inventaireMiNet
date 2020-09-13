from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import sqlalchemy

global host, user, password, db

app = Flask(__name__)
CORS(app)

host = 'localhost'
user = 'MiNET'
password = 'B7mw9G42'
db = 'inventaireMiNET'


def redirection():
    return 'Cette page n\'existe pas vraiment'


def get_object_params(cur, objectType: str) -> list:
    cur.execute('SHOW COLUMNS FROM ' + str(objectType).lower())
    result_col = cur.fetchall()

    return [(result_col[i]['Field'], result_col[i]['Type']) for i in range(len(result_col))]


@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"


@app.route("/add_table", methods=['GET', 'POST'])
def add_table():
    if request.method == 'POST':
        try:
            connection = pymysql.connect(host=host, user=user, password=password, db=db, charset='utf8')
            cur = connection.cursor(pymysql.cursors.DictCursor)

            name_table = str(request.form.get('name_table')).lower()
            params_obj = request.form.getlist('params[]')

            n = len(params_obj)

            if n == 0:
                return 'aucun paramètre'

            # Creation de la Table
            sql_create_table = "CREATE TABLE IF NOT EXISTS " + str(name_table).lower() + " (`id` int PRIMARY KEY NOT NULL AUTO_INCREMENT, `"

            if n > 1:
                for i in range(n - 1):
                    sql_create_table += str(params_obj[i]).lower() + "` varchar(255) NOT NULL, `"

            sql_create_table += str(params_obj[n - 1]).lower() + "` varchar(255) NOT NULL)"

            """
            Ajout de la Foreign Key
            Lien entre la TABLE inventaire et celle crée
            """
            sql_foreign_key = "ALTER TABLE " + name_table + " ADD CONSTRAINT `id_" + name_table + "` FOREIGN KEY (`id`) REFERENCES `inventaire` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT"

            cur.execute(sql_create_table)
            cur.execute(sql_foreign_key)

            return "success"

        except pymysql.Error as e:
            return str(e)

        finally:
            connection.close()

    return 'Tu fais n\'importe quoi'


@app.route("/add_obj", methods=['GET', 'POST'])
def add_obj():
    if request.method == 'POST':
        try:
            table_name = str(request.form.get('table_name')).lower()
            params = request.form.getlist('params[]')
            
            global_params = []
            private_params = []
            for x in params:
            	if x[0] in GLOBAL_PARAMS_NAMES:
            		global_params.append([x[0].lower(),x[1]])
            	else:
            		private_params.append([x[0].lower(),x[1]])
            
            add_object_in_table(table_name,global_params,private_params)
            
            return "L'ajout s'est effectué avec succès"

        except e:
            return "L'ajout n'a pas abouti"
        finally:
            return "Fin"

    return 'Tu fais n\'importe quoi'


@app.route("/access", methods=['GET', 'POST'])
def access():
    if request.method == 'POST':
        try:
            table_name = str(request.form.get('name_table')).lower()
            params = get_object_params(cur, table_name)

            params_name = [params[i][0] for i in range(len(params))]
            params_type = [params[i][1] for i in range(len(params))]

            cur.execute("SELECT * FROM `" + table_name + "`")
            result = cur.fetchall()

            return jsonify(name_table=table_name, name_params=params_name, result=result, types=params_type)

        except pymysql.Error as e:
            return str(e)
        finally:
            connection.close()

    return "None"


if __name__ == "__main__":
    app.run(debug=True)
