const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  id: Number,
  ref: String,
  status: String,
  created_at: Date,
  builds:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'GitlabBuild'
    }
  ],
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'GitlabUser'
  },
  project:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'GitlabProject'
  }

});

const Pipeline = mongoose.model('GitlabPipeline',schema);

module.exports = Pipeline;
