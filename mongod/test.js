var mongoose = require('mongoose');
let Model = mongoose.model('fruit');

//生成一个document
let apple = new Model({
  category: 'bb',
  name: 'bb'
});
console.log(apple);
//存放数据
apple.save((err, apple) => {
  if (err) return console.log(err);
  console.log(apple);
});
