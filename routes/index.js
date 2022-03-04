var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get("/register", function (req,res,next){
  res.render("register", {title: "registro"})
});

module.exports = router;
