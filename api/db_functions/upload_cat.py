import sqlite3

def add_category(db_category_file, shop_name, category):
    query1 = "SELECT * FROM Categories WHERE Shop_name=? AND Category=?;'
    # database table is called 'Categories'
    connection = sqlite3.connect(db_category_file)
    cursor = connection.cursor()
    cursor.execute(query, [shop_name, category])
    shop_name_data = cursor.fetchall()
    cursor.close()
    
    if len(shop_name_data) == 0:
        query2 = "INSERT INTO Categories (Shop_name, Category, Count) VALUES (?, ?, ?);"
        cursor = connection.cursor()
        cursor.execute(query2, [shop_name, category, 1])
        cursor.close()
        connection.commit()

    else:
        query3 = "UPDATE Categories SET Count=? WHERE Shop_name=? AND Category=?;"
        cursor = connection.cursor()
        cursor.execute(query3, [int(shop_name_data[0][2])+1, shop_name, category])
        cursor.close()
        connection.commit()

    connection.close()