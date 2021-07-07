const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CRUD_Mongo",{useNewUrlParser : true , useUnifiedTopology : true})
.then(() => {
    console.log("database connected ...")
})
.catch((err) => {
    console.log(err)
})

const mycollection = new mongoose.Schema({
    name : String,
    email : String,
    password : Number
})


const Mycollection = new mongoose.model("Mycollection",mycollection)

