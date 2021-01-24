import sqlite3
import json

def suggest_category(db_category_file, shop_name):
    query1 = "SELECT * FROM Categories WHERE Shop_name=?;'
    # database table is called 'Categories'
    connection = sqlite3.connect(db_category_file)
    cursor = connection.cursor()
    cursor.execute(query, [category])
    shop_name_data = cursor.fetchall()
    cursor.close()
    
    if len(shop_name_data) == 0:
        return json.dumps('no suggestion')

    else:
        sorted_cat = sorted(shop_name_data,key=lambda x: x[2], reverse=True)
        return json.dumps(str(shop_name_data[0][1]))
    
    connection.close()