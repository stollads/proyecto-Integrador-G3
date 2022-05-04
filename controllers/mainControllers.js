const controllers = {
    index:  function(req, res, next) {
        res.render('home', { title: 'home' })} ,
      
    registro: function (req,res,next) {
        res.render("register", {title: "register"})
      },

    login: function(req, res, next){
      res.render("login", {title: "login"})
    },
    carrito: function(req, res, next){
      res.render("cart", {title: "carrito"})
    },
    detalleProducto: function(req, res, next){
        res.render("detalle", {title: "detalle"})
    },
    /*detail: (req, res) => {
      let id = req.params.id
      let product = products.find(product => product.id == id);
      res.render('detail' , {
        product,
        toThousand
      })
    },*/

}
module.exports = controllers;