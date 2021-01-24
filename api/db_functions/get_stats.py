import sqlite3
import json
import pandas as pd

def get_statistics(db_transaction_file, user_id):
    query = "SELECT * FROM Transactions WHERE User_id=?;'

    connection = sqlite3.connect(db_transaction_file)
    cursor = connection.cursor()
    cursor.execute(query, [user_id])
    transactions_by_user = cursor.fetchall()
    cursor.close()
    connection.close()

    user_transact_df = pd.read_sql_table(transactions_by_user)
    statistics = process_transact_data(user_transact_df)

    return statistics.to_json()


def process_transact_data(user_transact_df):
    dates = sorted(user_transact_df["Date"].unique())
    if dates[0] != dates[1]:
        idx = pd.date_range(dates[0], dates[-1]).strftime('%Y-%m-%d')
    else:
        idx = [dates[0]]
    dates_to_add = [date for date in idx if date not in dates]
    
    transact_df = pd.get_dummies(user_transact_df, columns=['Category'])
    columns_before = list(user_transact_df.columns)   
    columns_after = list(transact_df.columns)
    categories = [column for column in columns_after if column not in columns_before]
    empty_row = {}
    for category in categories:
        transact_df[category] = transact_df[category]*transact_df['Amount']
        empty_row[category] = 0.0
    for date in dates_to_add:
        empty_row['Date'] = date
        transact_df = transact_df.append(empty_row, ignore_index=True)
    transact_df2 = transact_df.groupby("Date").sum()
    return transact_df2

def get_category_proportions(user_transact_df, date_from, date_to):
    dates = sorted(user_transact_df["Date"].unique())
    date_range = pd.date_range(date_from, date_to).strftime('%Y-%m-%d')
    dates_to_drop = [date for date in dates if date not in date_range]
    transact_df = pd.get_dummies(user_transact_df, columns=['Category'])
    columns_before = list(user_transact_df.columns)   
    columns_after = list(transact_df.columns)
    categories = [column for column in columns_after if column not in columns_before]
    for category in categories:
        transact_df[category] = transact_df[category]*transact_df['Amount']
    transact_df = transact_df.groupby("Date").sum()
    transact_df = transact_df.drop(dates_to_drop)
    transact_df.reset_index(drop=True, inplace=True)
    transact_df = transact_df.drop(columns=['Amount'])
    transact_df = transact_df.sum(axis=0)/transact_df.values.sum()*100
    transact_df = transact_df.round(1)
    return transact_df

# dummy data used:
#dummy_data = {'date': ['2011-06-02', '2011-06-05', '2011-06-05', '2011-06-04', '2011-06-01'], 'amount':[4.0, 7.0, 2.0, 0.5, 14.0], 'category':['Food', 'Transportation', 'Utilities', 'Food', 'Utilities']}
#dummy_dataframe = pd.DataFrame(fake_data)
# Example: get_category_proportions(fake_dataframe, '2011-06-01', '2011-06-17')
