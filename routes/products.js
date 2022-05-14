var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/productsControllers");
var upload = require('../middlewares/multerProduct')

//listado de productos
router.get('/', controllers.productsList);
//formulario de creacion
router.get('/create', controllers.createForm);
router.post("/create", upload.single('image'), controllers.processCreate)
//carrito de compras
router.get("/cart",controllers.carrito );
//formulario de edicion
router.get('/edit/:id', controllers.editForm);
router.put('/edit/:id', upload.single('image'), controllers.processEdit)
//detalle de un producto
router.get("/detail/:id", controllers.productDetail);
//eliminar un producto
router.delete('/delete/:id',controllers.delete)







/*
router.get("/:id/edit", controlers.edit);

router.put("/:id", controlers.update);

router.delete("/:id", controlers.delete);
*/

module.exports = router;