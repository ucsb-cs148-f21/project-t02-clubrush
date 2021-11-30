var express = require('express');
var router = express.Router();
const Club = require('../models/club');


router.get('/:id', async function(req, res) {
  try {
    console.log("working")
    const club = await Club.find({"name": `${req.params.id}`});
    
    if (!club) {
      return res.status(404).json({ msg: 'club not found' });
    }
    console.log(club)
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
      console.log(club)
      res.json(club);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
});

module.exports = router;