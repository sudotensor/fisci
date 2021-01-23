def get_database_client():
    """
    To query the database:
    ```
    session = get_database_client()
    result = session.execute("SQL")
    ```
    :return: cassandra database client
    """
    cloud_config = {
            'secure_connect_bundle': 'secure-connect-database.zip'
    }
    auth_provider = PlainTextAuthProvider('fisci', '46xcNrETE@csg9c')
    cluster = Cluster(cloud=cloud_config, auth_provider=auth_provider)
    session = cluster.connect()
    return session

    