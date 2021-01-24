# Fisci API documentation

## base URL

```
https://flask-container-iqk43m4jga-ew.a.run.app/
```

## Alive test

#### Request

```
GET baseurl/time
```

#### Success response

```json
{
    "time": 1611486849.4942896
}
```

## Transaction APIs

### Upload a single transaction

#### Request

```
POST baseurl/trans/add
```

#### Request body

```json
{
	"user_id": "Bob",
	"shop_name": "Sainsbury",
	"category": "Food",
	"amount": 9.99,
	"date": "2021-01-24"
}
```

#### Success response

```json
{
    "message": "success"
}
```

### Batch upload transactions with a csv file

#### Request

```
POST baseurl/trans/upload
```

#### Request body

- csv: the csv file containing transactions

#### Success response

```json
{
    "message": "success"
}
```
