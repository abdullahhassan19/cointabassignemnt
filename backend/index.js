const express =require("express")
const cors=require("cors")
require("dotenv").config()

const {approuter}=require("./Routers/Router")
const {connection} =require("./Config/db")
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", approuter);

app.get("/", (req, res) => {
  res.send("HomePage");
});

//connecting to data
app.listen(PORT,async()=>{
    await connection ;
    try{
        console.log("Connected to db")
    }
    catch{
        // console.log("error in db")
    }   
})
