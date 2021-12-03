var express = require('express');
var router = express.Router();
var cors = require('cors');

const Club = require('../models/club');

// async function addCommentsField(){
//   await Club.updateMany({}, { $set: {comments: [] }}, {upsert: false})
// }

router.get('/:id', async function(req, res) {
  try {
    const club = await Club.find({"name": `${req.params.id}`});
    
    if (!club) {
      return res.status(404).json({ msg: 'club not found' });
    }
    res.json(club);
  } catch (err) {
    console.error(err.message);
    
    res.status(500).send('Server Error');
  }
});

router.get('/', async function(req, res) {
  try {
      const club = await Club.find();
  
      if (!club) {
        return res.status(404).json({ msg: 'club not found' });
      }
      res.json(club);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
});



router.post('/:name/comments', async function(req, res, next){
  // await addCommentsField();
  const club = await Club.findOne({ name: req.params.name })
  console.log(club);
  const newComment = req.body;
  console.log(req.body);
  club.comments.push(newComment);
  await club.save();
  res.json(newComment)
});


/* GET comments listing. */


router.get('/:name/comments', async function(req, res, next) {
  const club = await Club.findOne({ name: req.params.name })
  res.json(club.comments)
  // res.render('clubs-show', { comments: comments})
});


// update comments
router.put('/change/:name/:id', async function(req, res, next) {
  try {
    const filter = { name: req.params.name, comments: {$elemMatch: {id: req.params.id}} }
    const data = await Club.find(filter)
    console.log(data)
    var string = req.body
    console.log(string)
    console.log(req.body)
    const update = { $set:  {"comments.$.body": JSON.stringify(req.body) } }
    await Club.updateOne(filter,  update, {new:true})
  }
  catch(e) {
    console.log(e)
  }
});

// delete comments
router.put('/update/:name/:id', async function(req, res, next) {
  const filter = { name: req.params.name }
  const update = { $pull: { comments: { id: req.params.id }}}

  await Club.findOneAndUpdate(filter,  update, {new:true})
});

module.exports = router;