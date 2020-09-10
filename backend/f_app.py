from flask import Flask, jsonify, request
import pymysql
from flask_cors import CORS

global host, user, password, db

app = Flask(__name__)
CORS(app)

host = 'localhost'
user = 'MiNET'
password = 'B7mw9G42'
db = 'inventaireMiNET'


def redirection():
    return 'Cette page n\'existe pas vraiment'


@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"


@app.route("/add")
def add():
    return redirection()


@app.route("/add/<string:test>", methods=['GET', 'POST'])
def add_table(test: str):
    if request.method == 'POST':
        try:
            connection = pymysql.connect(host=host, user=user, password=password, db=db, charset='utf8')
            cur = connection.cursor(pymysql.cursors.DictCursor)

            if test == "obj":
                return 'obj'
            elif test == "table":
                name_table = request.form.get('name_table')
                params_obj = request.form.getlist('params[]')

                n = len(params_obj)
                if n == 0:
                    return 'aucun paramètre'

                # Creation de la Table
                sql_create_table = "CREATE TABLE IF NOT EXISTS " + name_table + " (`id` int PRIMARY KEY NOT NULL AUTO_INCREMENT, `"

                if n > 1:
                    for i in range(n - 1):
                        sql_create_table += str(params_obj[i]) + "` varchar(255) NOT NULL, `"

                sql_create_table += str(params_obj[n - 1]) + "` varchar(255) NOT NULL)"

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

    return 'Tu fais n\'import quoi'


if __name__ == "__main__":
    app.run(debug=True)
