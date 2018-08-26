const User = require('../models/user')

const createOrUpdateUser = (req) => {
  User.findOne({
    'username':req.body.user.username
  })
  .exec()
  .then((user) => {
    if(user){
      user.avatar_url = req.body.user.avatar_url
      user.name = req.body.user.name
      user.save()
    }else{
      let newUser = new User({
        '_id':req.body.user.username,
        'id':req.body.user.username,
        'username':req.body.user.username,
        'name':req.body.user.name,
        'avatar_url':req.body.user.avatar_url
      });
      newUser.save();
    }
  })
  .catch((err)=>{
    return err;
  })
}

module.exports = {
  createOrUpdateUser:createOrUpdateUser
}
