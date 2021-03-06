const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  _id: {
    type:String
  },
  id: {
    type:String,
  },
  timestamp:  {
    type:Date
  },
  message: {
    type:String
  },
  url:{
    type:String
  },
  name:{
    type:String
  },
  email:{
    type:String
  }
})

const Commit = mongoose.model('GitCommit',schema);

module.exports = Commit;
