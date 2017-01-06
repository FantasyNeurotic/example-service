/**
 * Created by heyufeng on 17/1/6.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  name: String,
  sex: Boolean
});

module.exports = mongoose.model('Example', ExampleSchema);