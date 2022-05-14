const req = require("express/lib/request");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
  carrito: function (req, res, next) {
    res.render("cart", { title: "carrito" })
  },
  productDetail: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id);
    res.render('productDetail', {
      product
    })
  },
  createForm: (req, res) => {
    res.render("productCreate")
  },
  processCreate: (req, res) => {
    if (req.file) {
      let newProduct = {
        id: products[products.length - 1].id + 1,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        description: req.body.description,
        image: req.file.filename
      }
      products.push(newProduct)
      let productsJson = JSON.stringify(products, null, " ")
      fs.writeFileSync(productsFilePath, productsJson)
      res.redirect('/products')
    } else {
      res.render('productCreate')
    }
  },
  productsList: (req, res) => {
    res.render('products', { products })
  },
  delete: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    let imagePath = path.join(__dirname, '../public/img/products/', product.image)
    fs.unlink(imagePath, function (err) {
      if (err) throw err;
      console.log("Could not delete file!");
    });
    let productsUpdate = products.filter((i) => i.id != id);
    let productsUpdatedJSON = JSON.stringify(productsUpdate, null, " ");
    fs.writeFileSync(productsFilePath, productsUpdatedJSON);
    res.redirect("/products");
  },
  editForm: (req,res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id);
    res.render('productEdit', { product })
  },

  processEdit: (req, res) => {
    let id = req.params.id
    let prodEditing = products.find(product => product.id == id)
    let image
    if (req.file != undefined) {
      image = req.file.filename
    } else {
      image = prodEditing.image
    }
    prodEditing = {
      id: prodEditing.id,
      ...req.body,
      image: image,
    };
    let prodEdited = products.map(product => {
      if (product.id == prodEditing.id) {
        return product = { ...prodEditing }
      }
      return product
    })
    fs.writeFileSync(productsFilePath, JSON.stringify(prodEdited, null, ""))
    res.redirect('/')
  },
}
module.exports = controllers;