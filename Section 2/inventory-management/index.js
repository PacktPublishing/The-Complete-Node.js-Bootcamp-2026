
const express =  require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose")
require("dotenv").config()

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

// Home Page Task
app.get("/home", (req, res) => {
    res.send("Home Page")
})

 app.listen(port, () => {
    console.log(`App Listing on Port ${port}`)
 })


 const connectionString = process.env.CONNECT_STRING

 mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to Mongo DB ^_^"))
    .catch((error) => console.log(error))