const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  id: {
    type:Number,
  },
  name:  {
    type:String
  },
  description: {
    type:String
  },
  web_url:{
    type:String
  },
  ssh_url:{
    type:String
  },
  avatar_url:{
    type:String
  },
  namespace:{
    type:String
  }

});

const Project = mongoose.model('GitlabProject',schema);

module.exports = Project;
