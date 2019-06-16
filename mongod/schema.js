var mongoose = require('mongoose');

let Schema = mongoose.Schema({
  category: String,
  name: String
});
//继承一个schema
mongoose.model('fruit', Schema);

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};
