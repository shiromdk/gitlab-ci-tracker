const Build = require('../models/build')

const createOrUpdateBuild = async(req) => {
  let builds = req.body.builds
  for(let build of builds){
    let cBuild = await Build.findOne({
      'id':build.id
    })
    .exec()
    .then((foundBuild)=>{
      if(foundBuild){
        foundBuild.stage = build.stage
        foundBuild.name = build.name
        foundBuild.created_at = build.created_at
        foundBuild.finished_at = build.finished_at
        foundBuild.status = build.status
        foundBuild.save()
      }else{
        let newBuild = new Build({
          'id':build.id,
          '_id':build.id,
          'stage':build.stage,
          'name':build.name,
          'created_at':build.created_at,
          'finished_at':build.finished_at,
          'status':build.status
        })
        newBuild.save()
      }
    })
  }
}

const createOrUpdateSingleBuild = (build) => {

}
module.exports = {
  createOrUpdateBuild:createOrUpdateBuild,
  createOrUpdateSingleBuild:createOrUpdateSingleBuild
}
