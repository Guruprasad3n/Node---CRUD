const express = require("express");
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const contactRouter = require("./routes/contactRoute");
const userRouter = require("./routes/userRouter")
const errorHandler = require("./middlewares/errorHandler");
const app = express();


connectDB()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler)

app.use("/api/contacts", contactRouter)
app.use("/api/user", userRouter)


app.listen(PORT, (req, res)=>{
    console.log(`port Listening on http://localhost:${PORT}`)
})