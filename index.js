const express = require("express");
const dotenv = require("dotenv").config()
const app = express();


const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    res.send("Welcome to Home Page")
})


app.listen(PORT, (req, res)=>{
    console.log(`port Listening on http://localhost:${PORT}`)
})