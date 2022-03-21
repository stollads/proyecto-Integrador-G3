const controllers = {
    index:  function(req, res, next) {
        res.render('nada', { title: 'Express' })} ,
      
    registro: function (req,res,next) {
        res.render("register", {title: "register"})
      },

      login: function(req, res, next){
        res.render("login", {title: "login"})
      },
      carrito: function(req, res, next){
        res.render("carrito", {title: "carrito"})
      },
      detalleProducto: function(req, res, next){
        res.render("detalle", {title: "detalle"})
      }

}
module.exports = controllers;