const express = require("express");
const server = express();
const cors = require("cors");

const shoes = [
    { id: 111, name: "laboten", price: 3500 },
    { id: 222, name: "asos", price: 180 },
    { id: 333, name: "adidas", price: 300 },
];

server.use(express.json());

server.use(cors());

server.get("/shoes", (request, responce) => {
    responce.send(shoes);
});

server.get("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const singleShoe = shoes.find(s => s.id == id);
    if (singleShoe)
        res.send(singleShoe);
    else
        res.send(`Sorry we couldnt find the id ${id}`);
});

server.delete("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const shoeIndex = shoes.findIndex(s => s.id == id);
    if (shoeIndex > -1) {
        shoes.splice(shoeIndex, 1);
        res.send(`The shoe ${id} was deleted`);
    }
    else
        res.send(`Sorry we couldnt find the id ${id}`);
});


server.patch("/shoes/:id", (req, res) => {
    const id = req.params.id;
    
    const chosenShoe = shoes.find(s => s.id == id);
    if (chosenShoe) {
        const newShoe = req.body;
        if(newShoe.id)
            chosenShoe.id = newShoe.id;
        if(newShoe.name)
            chosenShoe.name = newShoe.name;
        if(newShoe.price)
            chosenShoe.price = newShoe.price;
        
        res.send(`The shoe ${id} was changed`);
    }
    else
        res.send(`Sorry we couldnt find the id ${id}`);
});


server.use((req, res, next) =>{
    const newShoe = req.body;
    let error = {};
    let valid = true;

    if (!newShoe.id) {
        error.id = "missing Id";
        valid = false;
    }

    if (!newShoe.name) {
        error.name = "missing Name";
        valid = false;
    }

    if (!newShoe.price) {
        error.price = "missing price";
        valid = false;
    }

    if(valid)
        next();
    else
        res.send(res.send(JSON.stringify(error)))
});

server.post("/shoes", (req, res) => {
    shoes.push(req.body);
    res.send("Post OK");
});

server.put("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const chosenShoe = shoes.find(s => s.id == id);
    if (chosenShoe) {
        const newShoe = req.body;

        chosenShoe.id = newShoe.id;
        chosenShoe.name = newShoe.name;
        chosenShoe.price = newShoe.price;
        res.send(`The shoe ${id} was changed`);
    }
    else
        res.send(`Sorry we couldnt find the id ${id}`);
});


server.listen(5000, () => {
    console.log("listening at 5000");
});