var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/productsControllers");
var upload = require('../middlewares/multerProduct')

/* GET home page. */

router.get('/', controllers.productsList); //para listado de productos
router.get('/create', controllers.createForm)
router.post("/create", upload.single('image'), controllers.processCreate)
router.get("/cart",controllers.carrito );
router.get("/detail/:id", controllers.productDetail);
router.delete('/delete/:id',controllers.delete)





/*
router.get("/:id/edit", controlers.edit);

router.put("/:id", controlers.update);

router.delete("/:id", controlers.delete);
*/

module.exports = router;