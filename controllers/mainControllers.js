const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator')


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const controllers = {
  /* Renderizado de vista home */
  index:  function(req, res, next) {   
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
    res.render('home', {products})
  },
  store:  function(req,res,next){
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.render('login',{errors: errors.errors})
    }
  },
  register:  function(req,res,next){
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.render('register',{errors: errors.errors})
    }
  }
}
module.exports = controllers;