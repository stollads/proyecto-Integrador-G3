const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `../public/img/products/`))
  },
  filename: function (req, file, cb) {
    let FileName = file.originalname + '-img' + path.extname(file.originalname)
    cb(null, FileName)
  },
})

const uploadFile = multer({ storage })

module.exports = uploadFile;


