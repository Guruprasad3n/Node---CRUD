const express = require("express");
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const router = require("./routes/contactRoute");
const errorHandler = require("./middlewares/errorHandler");
const app = express();


connectDB()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler)

app.use("/api/contacts", router)


app.listen(PORT, (req, res)=>{
    console.log(`port Listening on http://localhost:${PORT}`)
})