var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const User = require('../models/user');


router.get('/:id', async function(req, res, next){
  try {
    // await addCommentsField();
    // var o_id = ObjectId(req.params.id);
    // const id = req.param.id
    const user = await User.findById(req.params.id)
    console.log(user);
    
    res.json(user)
  }
  catch(e) {
    console.log(e)
  }
});

router.get('/bookmark/:id', async function(req, res, next){
  try {
    console.log("testing id")
    const user = await User.findById(req.params.id)
    console.log(user);

    res.json(user.bookmark)
  }
  catch(e) {
    console.log(e)
  }
});
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

router.post('/:id/bookmark', async function(req, res, next){
  try {
    // await addCommentsField();
    // var o_id = ObjectId(req.params.id);
    // const id = req.param.id
    const user = await User.findById(req.params.id)
    console.log("Body");
    // const newBookmark = req.body;
    console.log(req.body);
    const newBookmark = {
      name: req.body.name,
      image: req.body.image
    }
    console.log(newBookmark)
    user.bookmark.push(newBookmark);
    await user.save();
    res.json(newBookmark)
  }
  catch(e) {
    console.log(e)
  }
});


router.put('/delete/:id/:name', async function(req, res, next){
  try {
    const filter = {_id:req.params.id}
    const update = {$pull: {bookmark: {name: req.params.name}}}
    const data = await User.findOneAndUpdate(filter,update,{new:true})
    res.json(data)
  }
  catch(e) {
    console.log(e)
  }
});

router.put('/deleteall/:id', async function(req, res, next){
  try {
    const filter = { _id: req.params.id }
    const update = {$set: {bookmark: []}}
    const data = await User.updateMany(filter,update,{new:true})
    res.json(data)
  }
  catch(e) {
    console.log(e)
  }
});




module.exports = router;
