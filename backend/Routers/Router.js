const { Router}=require("express")
const { dataModel } = require("../Models/Data.Model");
const axios=require("axios")
const approuter=Router()
approuter.post("/postdata" , async (req,res)=>{
    // fetching data from api
    const data = await axios.get("https://randomuser.me/api/?results=50");
    let alldata=data.data.results

    // running a loop to form an object and storing data in mongodb 
    for (let i = 0; i < alldata.length; i++) {

       const newData = new dataModel({
         gender: alldata[i].gender,
         title: alldata[i].name.title,
         first: alldata[i].name.first,
         last: alldata[i].name.last,
         country: alldata[i].location.country,
         thumbnail: alldata[i].picture.thumbnail,
         email: alldata[i].email,
         postcode: alldata[i].location.postcode,
       });

       await newData.save();
    }
    res.send({ msg: "Success", data: alldata });
})
approuter.get("/getdata",async(req,res)=>{
    const data=await dataModel.find()
    res.send({msg:"success" ,data:data})
})

approuter.delete("/deletedata", async(req,res)=>{
    //deleting every all data from the mongodb file
    const deletedata = await dataModel.deleteMany();
    res.send({ msg: "dedleted", data: deletedata });
})


module.exports={approuter}