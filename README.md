# jsonprocenv
Sets your JSON env file to the process environment automatically.

The package flattens the JSON objects and provide easy and cleaner way to define your own process env variables, without the long and complex traditional .env file.

## Simple usage
```js
require("jsonprocenv")();  // Default ENV file path equals to "./.env".
```

## Installation
```js
npm install jsonprocenv --save
```

## Usage examples
Whereas "myenvfile.json" contains the following JSON:
```
{
    "db": {
        "host": "mongodb://mymongoserver.example.com:27017",
        "collections": {
          "users": "usersCollection"
        }
    },
    "apiKeys": {
        "api1": "1as23f4sdf96sd4f32d14f7g8dfd45dfg3df4f",
        "api2": "798wer7t89e9g7df564dfg2df1g6dfg7df65g6"
    }
}
```

Setting the data to `process.env`:
```js
require("jsonprocenv")("./myenvfile.json");

console.log(process.env.DB_HOST) // Will print out: "mongodb://mymongoserver.example.com:27017"
console.log(process.env.DB_COLLECTIONS_USERS) // Will print out: "usersCollection"
console.log(process.env.APIKEYS_API1) // Will print out: "1as23f4sdf96sd4f32d14f7g8dfd45dfg3df4f"
```
