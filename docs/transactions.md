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

### Get the transactions from a single user

#### Request

```
GET baseurl/trans/get/<user_id>
```

#### Success response

```json
[
    {
        "amount": 7.980000019073486,
        "category": "Provisions - General",
        "date": "2014-04-20",
        "labeled": true,
        "shop_name": "ARGOS LTD",
        "transaction_id": "9d7f1590-5dd9-11eb-9ddb-cfe6a86cc440",
        "user_id": "Tommy"
    },
    {
        "amount": 15,
        "category": "Marketing",
        "date": "2014-05-07",
        "labeled": true,
        "shop_name": "123RF.COM",
        "transaction_id": "9078bbd0-5dd9-11eb-9ddb-cfe6a86cc440",
        "user_id": "Tommy"
    }
]
```