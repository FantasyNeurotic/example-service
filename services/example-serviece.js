const mongoose = require('mongoose');
const Example = mongoose.model('Example');

exports.example1 = function(msg, done){
  //具体服务操作
  new Example({name: msg.data.name, sex: msg.data.sex}).save().then((result) => {
    done(null, result.toObject());
  });
};

exports.example2 = function(msg, done){
  Example.find({sex: msg.data.sex}).then((result) => {
    done(null, result);
  });
};