var express = require('express');
var router = express.Router();
const Comment = require('../models/comment');
const Club = require('../models/club');
// CREATE comment
router.post('/comments', async function(req, res, next){
      const newComment = new Comment(req.body);
      await newComment.save();
      res.json(newComment)
});

/* GET comments listing. */
router.get('/comments/:id', function(req, res, next) {
    Club.findById(req.params.id).then(clubs => {
        Comment.find({ id: req.params.id }).then(comments =>{
            res.render('clubs-show', { clubs: clubs, comments: comments})
        })
    }).catch((err) => {
        console.log(err.message)
    });
});



module.exports = router;
