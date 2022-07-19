const express = require("express");
const { json } = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 8900;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});