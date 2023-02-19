const mongoose =require("mongoose")

const schema = mongoose.Schema({
  gender: String,
  title: String,
  first: String,
  last: String,
  country: String,
  thumbnail: String,
  email: String,
  postcode: String,
});
//storing data in mongodb with name "cointabassignment"
const dataModel = mongoose.model("cointabassignment", schema);
module.exports = { dataModel };