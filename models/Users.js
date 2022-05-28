/* const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const User = {
    findByPk: (id)=>{
        let userFound = users.find((oneUser=>oneUser.id === id)) 
        return userFound
    },
    findByField: (field, valor)=>{
        let userFound = users.find((oneUser=>oneUser[field] === valor)) 
        return userFound
    },
    createUser: (userData)=>{
        users.push(userData)
    },
}
console.log(User.findByField('avatar', 'patito.png-img.png1653606147906')) */