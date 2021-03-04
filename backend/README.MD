## Endpoint

### Search

    GET /search

    with query below:
    key: keyword
    orderby: name || email || address || email
    order: asc || desc
    limit:
    offset:

Search query example:

    /search?key=rizky&orderby=name&order=asc&limit=10&offset=10

### Get Employee By ID

    GET /employee/:id

### Insert New Employee Data

    POST /employee

json body example:

    {
        "name": "Rizky saputrdaz",
        "email": "rizkyyfsfa@mail.com",
        "mobile": "+628213332",
        "birthdate": "1996-08-26",
        "address": "Lampung"
    }

### Edit Employee Data

    PUT /employee/:id

json body example:

    {
        "name": "Rizky saputrdaz",
        "email": "rizkyyfsfa@mail.com",
        "mobile": "+628213332",
        "birthdate": "1996-08-26",
        "address": "Lampung"
    }

### Delete Employee Data

    DELETE /employee/:id
