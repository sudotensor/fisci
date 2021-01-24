import time
import os
from flask import Flask, request, Response, jsonify
from flask_cors import CORS
from connect_database import get_database_client
import pandas as pd
import numpy as np
from errors import error_response, bad_request
from cassandra.query import ordered_dict_factory

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/trans/upload', methods = ["POST", "GET"])
def upload_transaction_csv():
    """
    batch upload the transaction by a csv file
    """

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
                error_response(500, "Error parsing csv. " + str(err))
        return {"message": "success"}
    else:
        return {"message": "Nothing happened. Please POST the csv file"}


@app.route('/trans/add', methods = ["POST"])
def add_transaction():

    """User send transaction details to be uploaded to the database
    Data is received in json format"""

    # parse the request
    data = request.get_json() or {}
    # check required fields
    required_fields = ["user_id", "shop_name", "category", "amount", "date"]
    for f in required_fields:
        if f not in data:
            return bad_request("Required field " + f + " is missing")
    # add labeled field
    data["labeled"] = len(data["category"]) == 0    # user provided the category or not
    # connect to db
    session = get_database_client()
    # update db
    try:
        session.execute("""
        INSERT INTO fisci.transactions (transaction_id, user_id, shop_name, category, labeled, amount, date)
        VALUES (now(), %s, %s, %s, %s, %s, %s);
        """, (data["user_id"], data["shop_name"], data["category"], 
        data["labeled"], float(data["amount"]), data["date"]))
    except Exception as err:
        return error_response(500, "Error in updating the database. " + str(err))    
    
    return {"message": "success"}


@app.route('/trans/get/<user_id>', methods = ["GET"])
def get_transaction(user_id):

    """User gets all previous transactions in json"""

    session = get_database_client()
    session.row_factory = ordered_dict_factory

    #query result
    rows = session.execute_async("SELECT * FROM fisci.transactions WHERE user_id = %s ;", (user_id))
    data = rows.result()
    
    #jsonify
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
