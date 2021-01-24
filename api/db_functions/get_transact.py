import sqlite3
import json

def get_transactions(db_transaction_file, user_id):
    query = "SELECT * FROM Transactions WHERE User_id=?;'

    connection = sqlite3.connect(db_transaction_file)
    cursor = connection.cursor()
    cursor.execute(query, [user_id])
    transactions_by_user = cursor.fetchall()
    cursor.close()
    connection.close()

    return json.dumps(transactions_by_user)