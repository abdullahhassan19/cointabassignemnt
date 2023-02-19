const mongoose =require("mongoose")
require("dotenv").config()

//used dotenv file to secure the url 
const connection=mongoose.connect(process.env.MONGODB_URL)

module.exports={connection}