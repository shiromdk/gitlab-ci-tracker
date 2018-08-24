const mongoose = require('mongoose');

let schema = new mongoose.Scheme({
  name: {
    type:String,
  },
  username:  {
    type:String
  },
  avatar_url: {
    type:String
  },
});
