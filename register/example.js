const exampleService = require('../services/example-serviece');

exports.example = function(){
  this.add('role:customer, cmd:example1', (msg, done) => {
    exampleService.example1(msg, done);
  });

  this.add('role:customer, cmd:example2', (msg, done) => {
    exampleService.example2(msg, done);
  });
};