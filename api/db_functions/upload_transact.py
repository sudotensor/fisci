import sqlite3

def add_transaction(db_transaction_file, new_transaction):
    query = "INSERT INTO Transactions (User_id, Date, Shop_name, Amount, Category) VALUES (?, ?, ?, ?, ?);"
    # database table is called 'Transactions'

    connection = sqlite3.connect(db_transaction_file)
    cursor = connection.cursor()
    cursor.execute(query, list(new_transaction))
    cursor.close()
    connection.commit()
    connection.close()
