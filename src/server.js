if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const https = require("https");

const cert = fs.readFileSync(
  path.resolve(__dirname, `../certs/${process.env.GN_CERT}`)
);

const agent = new https.Agent({
  pfx: cert,
  passphrase: "",
});

const credentials = Buffer.from(
  `${process.env.GN_CLIENT_ID}:${process.env.GN_CLIENT_SECRET}`
).toString("base64");

axios({
  method: "POST",
  url: `${process.env.GN_ENDPOINT}/oauth/token`,
  headers: {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/json",
  },
  httpsAgent: agent,
  data: {
    grant_type: "client_credentials",
  },
}).then((response) => {
  console.log(response.data);
});

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
