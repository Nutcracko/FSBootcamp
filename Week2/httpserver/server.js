const http = require("http");
const kisiler = require("./data.json");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(kisiler));
    res.end();
  } else {
    res.writeHead(401);
    res.end();
  }
});

server.listen(3030, () => console.log("Server is running..."));
