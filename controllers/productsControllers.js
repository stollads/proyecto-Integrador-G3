const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    carrito: function(req, res, next){
      res.render("cart", {title: "carrito"})
    },
    productDetail: (req, res) => {
      let id = req.params.id
      let product = products.find(product => product.id == id);
      res.render('productDetail' , {
        product
      })
    },
    createForm: (req,res) => {
      res.render("productCreate",)
    },
    processCreate: (req,res)=>{
      if(req.file){
        let newProduct = {
          id: products[products.length -1].id +1,
          name: req.body.name,
          price: req.body.price,
          discount: req.body.discount,
          category: req.body.category,
          description: req.body.description,
          image: req.file.filename
        }
        products.push(newProduct)
        let productsJson = JSON.stringify(products,null," ")
        fs.writeFileSync(productsFilePath, productsJson)
        res.redirect('products')
      }else{
        res.render('productCreate')
      }
    },
    productsList: (req,res)=>{
      res.render('products',{products})
    },
    delete: (req,res)=>{
      let id = req.params.id
      let product = products.find(product => product.id == id)
      let imagePath = path.join(__dirname, '../public/img/products/',product.image)
      fs.unlink(imagePath, function (err) {
        if (err) throw err;
        console.log("Could not delete file!");
      });
      let allShoesUpdated = allShoes.filter((i) => i.product_id != idProduct);
      let allShoesUpdatedJSON = JSON.stringify(allShoesUpdated, null, " ");
      fs.writeFileSync(allShoesFilePath, allShoesUpdatedJSON);
      res.redirect("/products");
    }
}
module.exports = controllers;