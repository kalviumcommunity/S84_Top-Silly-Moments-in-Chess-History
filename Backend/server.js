const express = require("express");
const app = express();

const PORT = 6900;

app.get("/", (req, res) => {
    res.send("My name is Avinash. I am from squad-84")
})

app.listen(6900, () => {
    console.log(`Server is running on port ${PORT}`)
})