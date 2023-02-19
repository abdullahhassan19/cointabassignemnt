const { Router}=require("express")
const { dataModel } = require("../Models/Data.Model");
const axios=require("axios")
const approuter=Router()


// Storing data 
approuter.post("/postdata" , async (req,res)=>{
    // fetching data from api
    const data = await axios.get("https://randomuser.me/api/?results=100");
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

//getting data
approuter.get("/getdata",async(req,res)=>{
    //retriving data from mongodb
    const data=await dataModel.find()
    res.send({msg:"success" ,data:data})
})


//deleting all the data 
approuter.delete("/deletedata", async(req,res)=>{
    //deleting every all data from the mongodb file
    const deletedata = await dataModel.deleteMany();
    res.send({ msg: "data deleted", data: deletedata });
})


//Filtering data with pageinition
approuter.get("/filter",async(req,res)=>{
    
    const {filter,page}=req.query
    // console.log(filter,page)
    //retriving the data when filter is applied
    if(page && filter){
        const data = await dataModel
          .find({ country: filter })
          .skip(page > 0 ? (page - 1) *  10: 0)
          .limit(10);
        res.send({ msg: "success", data: data });
    }
    else{
      //retriving data from mongodb with pageinition
      const data = await dataModel
        .find()
        .skip(page > 0 ? (page - 1) * 10 : 0)
        .limit(10);
      res.send({ msg: "success", data: data });
    }
    

})

module.exports={approuter}