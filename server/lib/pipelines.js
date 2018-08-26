const Pipeline = require('../models/pipeline')

const createOrUpdatePipeline = async(req) => {

  let buildIds = []
  for(let build in req.body.builds){
    buildIds.push(req.body.builds[build].id)
    console.log("BUILD")
    console.log(build)
  }
  console.log(buildIds)
  return Pipeline.findOne({
    'id':req.body.object_attributes.id
  })
  .exec()
  .then((pipeline)=>{
    if(pipeline){
      pipeline.ref = req.body.object_attributes.ref
      pipeline.status = req.body.object_attributes.status
      pipeline.created_at = req.body.object_attributes.created_at
      pipeline.builds = buildIds
      pipeline.user = req.body.user.username
      pipeline.project = req.body.project.id
    }else{
      let newPipeline = new Pipeline({
        '_id':req.body.object_attributes.id,
        'id':req.body.object_attributes.id,
        'ref':req.body.object_attributes.ref,
        'status':req.body.object_attributes.status,
        'created_at':req.body.object_attributes.created_at,
        'builds':buildIds,
        'user':req.body.user.username,
        'project':req.body.project.id
      })
      newPipeline.save()
    }
  })
}

module.exports = {
  createOrUpdatePipeline:createOrUpdatePipeline
}
