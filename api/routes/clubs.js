var express = require('express');
var router = express.Router();
var cors = require('cors');

const Club = require('../models/club');

// async function addCommentsField(){
//   await Club.updateMany({}, { $set: {comments: [] }}, {upsert: false})
// }

router.get('/:id', async function(req, res) {
  try {
    console.log("working clubs")
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
    console.log("working")
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


router.put('/:name/comments', async function(req, res, next) {

  const club = await Club.findOne({ name: req.params.name })
  const comments = Club.comments.map()
  const newComment = req.body;
  console.log(req)

  res.json(comments)
});

router.delete('/:name/comments', async function(req, res, next) {
  const club = await Club.findOne({ name: req.params.name })
  club.deleteAll()
});

module.exports = router;