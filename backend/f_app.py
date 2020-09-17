from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import sqlalchemy

global host, user, password, db

app = Flask(__name__)
CORS(app)

def redirection():
    return 'Cette page n\'existe pas vraiment'


def get_object_params(cur, objectType: str) -> list:
    cur.execute('SHOW COLUMNS FROM ' + str(objectType).lower())
    result_col = cur.fetchall()

    return [(result_col[i]['Field'], result_col[i]['Type']) for i in range(len(result_col))]


@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"


@app.route("/add_type", methods=['GET', 'POST'])
def add_type():
    if request.method == 'POST'
        try:
            type_name = request.form.get('type_name')
            params = request.form.getlist('params[]')
                      
            add_type(type_name,jsonify(params=params))
            
            return "ADDTABLE: success"

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
            
            return "ADDOBJ: Success"

        except:
            e = sys.exc_info()[0]
            return "ADDOBJ: Fail, reason" str(e)
        finally:
            return "Fin"

    return 'Tu fais n\'importe quoi'


@app.route("/access", methods=['GET', 'POST']) #Demande
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
            return "ACCESS: Fail, reason:" + str(e)
        finally:
            connection.close()

    return "None"

@app.route("/del_obj", methods=['GET', 'POST'])
def del_obj():
    if request.method == 'POST':
        try:
            id_obj = request.form.get('obj_id')
            type_obj = request.form.get('obj_type')
            
            delete_object(id_obj,type_obj)
            
            return "DEL: Success"
        
        except:
            e = sys.exc_info()[0]
            return "DELOBJ: Fail, reason:" + str(e)
        
        finally:
            return "Done"
            
@app.route("/new_loan", methods=['GET', 'POST'])
def record_loan():
    if request.method == 'POST':
        try:
            id_obj = request.form.get('obj_id')
            borrower_first_name = request.form.get('borrower_first_name')
            borrower_last_name = request.form.get('borrower_last_name')
            starting_date = datetime.datetime.today().strftime('%Y-%m-%d-%H-%M-%S-%f)
            
            new_loan(id_obj,borrower_first_name,borrower_last_name,starting_date)
            
            return "NEWLOAN: Success"
        
        except:
            e = sys.exc_info()[0]
            return "NEWLOAN: Fail, reason:" + e
        finally:
            return "Done"
                                                               
if __name__ == "__main__":
    app.run(debug=True)
