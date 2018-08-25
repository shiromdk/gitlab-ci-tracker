const mongoose = require('mongoose');

let schema = new mongoose.Schema({
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
