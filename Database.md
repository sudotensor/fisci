# Database

To get an instance of the database client, import the `connect_database.py` module, and call
the `get_database_client()` method:

```python
import connect_database

client = connect_database.get_database_client()

result = client.execute("SELECT * FROM transactions").all()
```


