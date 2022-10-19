const express = require("express");
const app = express();

app.use(express.json());

const products = require("./products.json");

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(9500, () => {
    console.log(`listening on 9500`);
});