var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.post('/signup', async function(req, res, next){
  try{
    const { email } = req.params;
    const searchUser = await User.find(email) 
    if(searchUser.length !== 0) {
      console.log("User already exists")
      console.log(searchUser[0])
      res.json("User already exists")
    }
    else {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser)
    }
  }
  catch(e){
    console.log("Error signing up")
    console.log(e)
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
