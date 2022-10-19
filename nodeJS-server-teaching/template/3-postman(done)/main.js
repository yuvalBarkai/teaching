const express = require("express");
const server = express();

server.use(express.json());

const shoes = [
    { id: 111, name: "Nike", price: 400 },
    { id: 222, name: "Nike", price: 400 },
    { id: 333, name: "Nike", price: 400 }
];

server.get("/shoes", (request, responce) => {
    responce.send(shoes);
});

server.post("/shoes", (request, responce) => {
    const id = request.body.id;
    if (shoes.find(s => s.id == id))
        res.send(`id ${id} already exists`);
    else {
        shoes.push(request.body);
        responce.send("(:");
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
        res.send(`Shoe no. ${id} not found`);
    }
});

server.put("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const singleShoe = shoes.find(p => p.id == id);
    if (singleShoe) {
        const editData = req.body;
        singleShoe.id = editData.id;
        singleShoe.name = editData.name;
        singleShoe.price = editData.price;
        res.send("Put OK");
    }
    else {
        res.send(`shoe number ${id} not found`)
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
        if (editData.price)
            singleShoe.price = editData.price;

        res.send("Put OK");
    }
    else {
        res.send(`shoe number ${id} not found`)
    }
});



server.listen(5000, () => {
    console.log("listening at 5000");
});