const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  _id: {
    type:Number
  },
  id: Number,
  ref: String,
  status: String,
  created_at: Date,
  builds:[
    {
      type:String,
      ref:'GitlabBuild'
    }
  ],
  user:{
    type:String,
    ref:'GitlabUser'
  },
  project:{
    type:String,
    ref:'GitlabProject'
  }

});

const Pipeline = mongoose.model('GitlabPipeline',schema);

module.exports = Pipeline;
