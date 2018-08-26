const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  _id: {
    type:String
  },
  id:{
    type:String
  },
  name: {
    type:String,
  },
  username:  {
    type:String
  },
  avatar_url: {
    type:String
  }
});

const User = mongoose.model('GitlabUser',schema);

module.exports = User;
