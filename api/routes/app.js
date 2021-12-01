var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.sendfile('index');
    console.log("testing")
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

module.exports = router;