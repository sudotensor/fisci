import time
import os
from flask import Flask, request, Response
from flask_cors import CORS
from connect_database import get_database_client
import pandas as pd
import numpy as np

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/trans/upload', methods = ["POST", "GET"])
def upload_transaction_csv():
    if request.method == "POST":
        # parse the csv file
        f = request.files['csv']
        df = pd.read_csv(f)
        # connect the database
        session = get_database_client()
        # update the db
        for i in range(df.shape[0]):
            # Check if category is nan
            if df.category[i] != df.category[i]:
                category = ""
            else:
                category = df.category[i]
            try:
                session.execute(
                    """
                    INSERT INTO fisci.transactions 
                    (transaction_id, user_id, shop_name, category, labeled, amount, date)
                    VALUES (now(), %s, %s, %s, %s, %s, %s)
                    """,
                    (df.user_id[i], df.shop_name[i], category,
                    bool(df.labeled[i]), float(df.amount[i]), df.date[i])
                )
            except Exception as err:
                print(err)
                return Response("{'msg': 'Error parsing csv'}", status = 500, mimetype = 'application/json')
        return {"msg": "success"}
    else:
        return {"msg": "Nothing happened. Please POST the csv file"}


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
