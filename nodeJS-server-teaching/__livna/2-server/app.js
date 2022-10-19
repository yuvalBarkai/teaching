const express = require("express");
const server = express();

const shoes = [
    { id: 111, name: "laboten", price: 3500 },
    { id: 222, name: "asos", price: 180 },
    { id: 333, name: "adidas", price: 300 },
];

server.use(express.json());

server.get("/shoes", (request, responce) => {
    responce.send(shoes);
});

server.listen(5000, ()=>{
    console.log("listening at 5000");
});