const http = require("http");
const kisiler = require("./data.json");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(kisiler));
  res.end();
});

server.listen(3030, () => console.log("Server is running..."));
