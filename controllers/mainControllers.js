const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
const controllers = {
  /* Renderizado de vista home */
  index:  function(req, res, next) {
    res.render('home', {products})
  },
}
module.exports = controllers;