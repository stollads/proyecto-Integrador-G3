var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nada', { title: 'Express' });
});
router.get("/register", function (req,res,next){
  res.render("register", {title: "register"})
});

router.get("/login", function(req, res, next){
  res.render("login", {title: "login"})
});
router.get("/carrito", function(req, res, next){
  res.render("carrito", {title: "carrito"})
});
router.get("/detalle", function(req, res, next){
  res.render("detalle", {title: "detalle"})
});
/*
router.get("/:id/edit", controlers.edit);

router.put("/:id", controlers.update);

router.delete("/:id", controlers.delete);
*/
module.exports = router;
