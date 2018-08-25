const Project = require('../models/project')

const createOrUpdateProject = (req) => {
  Project.findOne({
      'id': req.body.project.id
    })
    .exec()
    .then((project) => {
      if (project) {
        project.name = req.body.project.name
        project.description = req.body.project.description
        project.web_url = req.body.project.web_url
        project.ssh_url = req.body.project.git_ssh_url
        project.namespace = req.body.project.namespace
        project.avatar_url = req.body.project.avatar_url
      }
      else{
        let newProject = new Project({
          'id':req.body.project.id,
          'name':req.body.project.name,
          'description':req.body.project.description,
          'web_url':req.body.project.web_url,
          'ssh_url':req.body.project.git_ssh_url,
          'namespace':req.body.project.namespace,
          'avatar_url':req.body.project.avatar_url
        });
        newProject.save();
      }
    })
}

module.exports = {
  createOrUpdateProject:createOrUpdateProject
}
