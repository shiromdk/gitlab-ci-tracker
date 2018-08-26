const Router = require('express-promise-router');
const router = new Router();
const User = require('../lib/users')
const Project = require('../lib/projects')
const Build = require('../lib/builds')
const Pipeline = require('../lib/pipelines')
module.exports = router;

router.post('/pipeline', async(req, res) => {
  // console.log(req.body)
  res.sendStatus(200)
  console.log("User Creation")
  await User.createOrUpdateUser(req)
  console.log("Project Creation")
  await Project.createOrUpdateProject(req)
  console.log("Build Creation")
  await Build.createOrUpdateBuild(req)
  console.log("Pipeline Creation")
  await Pipeline.createOrUpdatePipeline(req)
});
