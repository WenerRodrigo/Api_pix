if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const cert = fs.readFileSync(path.resolve(__dirname, "../certs/cert.pem"));

console.log(process.env);

/*
    curl --request POST \
  --url https://api-pix.gerencianet.com.br/oauth/token \
  --header 'Authorization: Basic Q2xpZW50X0lkXzg2MjY0OWNhN2VjMGE5N2NiZDQxN2RmNmY4YjU5N2NhYzk4ZjQ5YmM6Q2xpZW50X1NlY3JldF83OTAwYzljNjM0NzJkY2YyYWE1MGMwNTk2YmI3ZGIwNzA5MTgwMWEz' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
    "grant_type": "client_credentials"
}'
*/
