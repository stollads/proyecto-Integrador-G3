const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    registro: function (req,res,next) {
        res.render("register", {title: "register"})
      },

    login: function(req, res, next){
      res.render("login", {title: "login"})
    },
}
module.exports = controllers;