const Router = require('express-promise-router');
const router = new Router();
module.exports = router;

router.post('/push', async(req, res) => {
  console.log(req.body)
  res.send("test");
});
