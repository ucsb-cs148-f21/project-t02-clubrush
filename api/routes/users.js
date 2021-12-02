var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.post('/signup', async function(req, res, next){
  try{
    const { email } = req.body;
    console.log(email)
    const searchUser = await User.find({"email": email}) 
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
router.post('/login', async function(req, res, next) {
  try {
    const searchUser = await User.find({"email": req.body.email})
    console.log(searchUser)
    if(searchUser.length !== 0) {
      console.log(searchUser[0].password)
      if(req.body.password == searchUser[0].password) {
        res.json(searchUser[0])
      }
      else{
        console.log("Incorrect Password")
        res.json("Incorrect Password")
      }
    }
    else {
      console.log("User does not exist")
      res.json("User does not exist")
    }
  }
  catch (e) {
    console.log("Error logging in")
    console.log(e)
  }
});



module.exports = router;
