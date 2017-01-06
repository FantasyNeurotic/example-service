/**
 * Created by heyufeng on 17/1/6.
 */
'use strict';
const mongoose = require('mongoose');
const nconf = require('nconf');
mongoose.connect(nconf.get('mongodb'));

const models = ['example'];

models.forEach((item)=>{
  require(`./models/${item}`);
});