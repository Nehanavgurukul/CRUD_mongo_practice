const express = require("express")
const router = express.Router()
const mongoose = require("../database/dbconnection")

require("../controllers/Mycollection")(mongoose,router)

module.exports = router; 
