const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/ShoeRoute");

const port = 5000;

const server = express();

server.use(bodyParser.json());

server.use("/api", router);

server.listen(port, () => console.log(`server is ready at port: ${port}`));
