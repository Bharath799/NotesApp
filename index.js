const express = require("express");
const setupDB = require("./config/database");
const router = require("./config/routes");
const cors = require("cors");
setupDB();
const port = 3016;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log("listening on port", port);
});
