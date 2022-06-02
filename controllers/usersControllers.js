const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
const controllers = {
  /* Renderizado de Formulario de registro */
  registerForm: function (req, res, next) {
    res.render("users/register")
  },
  /* Logica del registro de usuario */
  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.errors,
        oldData: req.body
      });
    }

    const userInDB = (field, text) => {
      let userFound = users.find(oneUser => oneUser[field] === text)
      return userFound('email', req.body.email)
    }
    if (userInDB) {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return res.render("users/register", {
          errors: {
            email: {
              msg: 'este mail'
            }
          },
          oldData: req.body
        });
      }
    }

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
      return newUser
    } else {
      res.render('users/register')
    }
  },
  /* Renderizado de Formulario de login */
  loginForm: function (req, res, next) {
    res.render("users/login")
  },
  /* Logica del login de usuario */
  processLogin: (userData) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/login", { errors: errors.errors });
    }
    users.push(userData)
  },
  /* Renderizado de perfil */
  profile: function (req, res) {
    res.render('users/profile')
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
  delete: (req, res) => {
    let id = req.params.id
    let user = users.find(user => user.id == id)
    let imagePath = path.join(__dirname, '../public/img/users/', user.avatar)
    fs.unlink(imagePath, function (err) {
      if (err) throw err;
      console.log("Could not delete file!");
    });
    let usersUpdate = users.filter((i) => i.id != id);
    let usersUpdatedJSON = JSON.stringify(usersUpdate, null, " ");
    fs.writeFileSync(usersFilePath, usersUpdatedJSON);
    res.redirect("/users");
  },
}
module.exports = controllers;