# Statistics (spending insights)

## Category breakdown

Pie chart with the different categories of spending.

Request:

```
GET baseurl/stats/category/<user_id>
```

Data format:

```json
{
  "data": [
    {
      "category": "food",
      "spending": 301.82
    },
    {
      "category": "clothing",
      "spending": 87.05
    }
  ]
}
```

Success Response:

```json
{
    "data": [
        {
            "category": "Advertising / Publicity",
            "spending": 39.14000129699707
        },
        {
            "category": "Books & other reference materials",
            "spending": 696.5700038671494
        },
        {
            "category": "Books, Maps, Plans",
            "spending": 336.0699896812439
        }
    ]
}
```

## Spending over time

Line/bar chart with the amount spent each day

Request:

```
GET baseurl/stats/time/<user_id>
```

Data format:

```json
{
  "data": [
    {
      "date": "2020-01-18",
      "spending": 32.55
    },
    {
      "date": "2020-04-02",
      "spending": 67.99
    }
  ]
}
```

Success response:

```json
{
    "data": [
        {
            "date": "2014-04-01",
            "spending": 372.8200068473816
        },
        {
            "date": "2014-04-02",
            "spending": 933.2900121212006
        },
        {
            "date": "2014-04-03",
            "spending": 281.9099988937378
        }
    ]
}
```
