const Router = require('express-promise-router');
const router = new Router();
const User = require('../lib/users')
const Project = require('../lib/projects')
const Build = require('../lib/builds')
module.exports = router;

router.post('/pipeline', async(req, res) => {
  // console.log(req.body)
  User.createOrUpdateUser(req)
  Project.createOrUpdateProject(req)
  Build.createOrUpdateBuild(req)
  res.send("test");
});
