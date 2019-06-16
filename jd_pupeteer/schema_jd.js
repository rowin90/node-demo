const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jdSchema = new Schema({
  title: String,
  href: String,
  img: String,
  price: Number
});

mongoose.model('jd', jdSchema);
