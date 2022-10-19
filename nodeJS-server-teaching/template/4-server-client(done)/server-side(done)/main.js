const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());

server.use(cors());

const shoes = [
    { id: 111, name: "Nike", price: 400 },
    { id: 222, name: "Nike", price: 400 },
    { id: 333, name: "Nike", price: 400 }
];

server.get("/shoes", (request, responce) => {
    responce.send(shoes);
});

server.post("/shoes", (req, res) => {
    const id = req.body.id;
    const body = req.body;
    let valid = true;
    if(!body.id || !body.name || !body.price)
        valid = false;

    if (shoes.find(s => s.id == id))
        res.status(409).send(`id ${id} already exists`);
    else if(!valid){
        res.status(400).send("missing information for shoe")
    }
    else {
        shoes.push(req.body);
        res.send("(:");
    }
});

server.delete("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const index = shoes.findIndex(s => s.id == id);
    if (index > -1) {
        shoes.splice(index, 1);
        res.send("Delete Ok");
    }
    else {
        res.status(404).send(`Shoe no. ${id} not found`);
    }
});

server.put("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const singleShoe = shoes.find(p => p.id == id);
    const body = req.body;
    let valid = true;
    if(!body.id || !body.name || !body.price)
        valid = false;

    if (singleShoe && valid) {
        const editData = req.body;
        singleShoe.id = editData.id;
        singleShoe.name = editData.name;
        singleShoe.price = editData.price;
        res.send("Put OK");
    }
    else if(!valid){
        res.status(400).send(`missing information for shoe ${id}`);
    }
    else {
        res.status(404).send(`shoe number ${id} not found`);
    }
});

server.patch("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const singleShoe = shoes.find(p => p.id == id);
    if (singleShoe) {
        const editData = req.body;
        if (editData.id)
            singleShoe.id = editData.id;

        if (editData.name)
            singleShoe.name = editData.name;

        if (editData.price || editData != 0)
            singleShoe.price = editData.price;

        res.send("Put OK");
    }
    else {
        res.status(404).send(`shoe number ${id} not found`);
    }
});



server.listen(5000, () => {
    console.log("listening at 5000");
});