const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controllers = {
/* Renderizado de Formulario de registro */
  registerForm: function (req,res,next) {
    res.render("register")
  },
/* Logica del registro de usuario */  
  processRegister: (req, res)  => {
    if (req.file) {
      let newUser = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        direccion: req.body.direccion,
        avatar: req.file.filename,
      }
      users.push(newUser)
      let usersJson = JSON.stringify(users, null, " ")
      fs.writeFileSync(usersFilePath, usersJson)
      res.redirect('/')
    } else {
      res.render('register')
    }
  },
/* Renderizado de Formulario de login */
  loginForm: function(req, res, next){
      res.render("login")
  },
/* Logica del login de usuario */    
  processLogin: (userData)=>{
    let userData = {
      
    }
    users.push(userData)
  },

/* Renderizado de perfil */  
  profile: function (req, res) {
    res.render('profile')
  },
/* Renderizado de formulario de edición */
  editForm: function (req, res) {
    // Aquí renderiza el formulario de edición de un usuario específico
  },
/* Logica de edicion */  
  processEdit: function (req, res) {
    // Aquí va la lógica de la edición de usuario
  },
/* Logica de eliminacion */    
  delete: function (req, res) {
    // Aquí va la lógica de eliminación de usuario
  },
}
module.exports = controllers;