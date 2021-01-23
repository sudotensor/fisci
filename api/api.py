import time
from flask import Flask
import connect_database

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    session = connect_database.get_database_client()
    t = session.execute("SELECT id FROM fisci.test_table WHERE id>314160 ALLOW FILTERING;").one()[0]
    return {'time': t}
