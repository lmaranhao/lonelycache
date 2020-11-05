# LonelyCache

This is the simplest in menory key value database implementation you can think of.

It has a Postman colleciton file `lonelycache.postman_collection.json` so you can try it on your local.

1. clone the project to a local folder
2. run `npm install && npm run start` and you should be good to go
3. open the `lonelycache.postman_collection.json` on your local postman and start adding/fetching/removing/updating entries on your local database

## Here is the API documentation if you want to get started from curl
> It doesn't have swagger just yet, but it will have soon.



### add (the auto generated key comes in the response)
```
curl --location --request POST 'localhost:8080/add' \
--header 'Content-Type: text/plain' \
--data-raw 'value_here'
```

### fetch
```
curl --location --request GET 'localhost:8080/fetch/key_here'
```

### delete
```
curl --location --request DELETE 'localhost:8080/delete/key_here'
```

### update
```
curl --location --request PUT 'localhost:8080/update/key_here' \
--header 'Content-Type: text/plain' \
--data-raw 'NEW_value_here'
```
> Jest test cases to be added soon as well.