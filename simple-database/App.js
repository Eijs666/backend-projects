const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const User = require("./User");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => 
{console.log(`Server on http://localhost:${port}`)
});

mongoose.connect("mongodb+srv://eijs666:<password>@simpledb.0ejhumv.mongodb.net/?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB"))

app.post("./Users", async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});