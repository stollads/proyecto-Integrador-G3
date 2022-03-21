var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/mainControllers");
/* GET home page. */
router.get('/', controllers.index);

router.get("/register", controllers.registro);

router.get("/login", controllers.login);

router.get("/carrito",controllers.carrito );

router.get("/detalleProducto", controllers.carrito );
/*
router.get("/:id/edit", controlers.edit);

router.put("/:id", controlers.update);

router.delete("/:id", controlers.delete);
*/
module.exports = router;
