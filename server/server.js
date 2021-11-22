const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

const processRoute = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", processRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API available http://localhost:${port}`);
});
