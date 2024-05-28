const server = require("./server");
const db = require("./db");

const port = 8080;

db.init();

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
