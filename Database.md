# Database

To get an instance of the database client, import the `connect_database.py` module, and call
the `get_database_client()` method:

```python
import connect_database

client = connect_database.get_database_client()

result = client.execute("SELECT * FROM transactions").all()
```

## Schema

### Classification table

##### Definitions

| Column name | Data type |
| ----------- | --------- |
| shop_name   | text      |
| category    | text      |
| occurances  | int       |

Primary key (shop_name, category)

##### Example data

| shop_name    | category | occurances |
| ------------ | -------- | ---------- |
| Morrisons    | food     | 1          |
| ASDA         | food     | 1          |
| River Island | clothing | 1          |
