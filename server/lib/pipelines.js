const Pipeline = require('../models/pipeline')

const createOrUpdatePipeline = async(req) => {
  let buildIds = []
  for(let build in req.body.builds){

    buildIds.push(build.id)
  }
  Pipeline.findOne({
    'id':req.body.object_attributes.id
  })
  .exec()
  .then((pipeline)=>{
    if(pipeline){
      pipeline.ref = req.body.object_attributes.ref
      pipeline.status = req.body.object_attributes.status
      pipeline.created_at = req.body.object_attributes.created_at

    }
  })
}
