const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  id: {
    type:Number
  },
  stage:  {
    type:String
  },
  name: {
    type:String
  },
  created_at:{
    type:Date
  },
  finished_at:{
    type:Date
  },
  status:{
    type:String
  },
  build_duration:{
    type:Number
  }
});

const Build = mongoose.model('GitlabBuild',schema);

module.exports = Build;
