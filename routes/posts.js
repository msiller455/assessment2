var express = require('express');
var router = express.Router();
const posts = require('../sample-data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(posts);
  res.render('posts', {
    title: "Posts",
    posts: posts
  });
});


module.exports = router;
