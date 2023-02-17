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

const dataModel = mongoose.model("cointabassignment", schema);
module.exports = { dataModel };