const router = require("./routes/paths")
const express = require("express")
const app = express()
require("dotenv").config()
const MY_PORT = process.env.PORT

app.listen(MY_PORT,() => {
    console.log(`server is running on ${MY_PORT}`)
})