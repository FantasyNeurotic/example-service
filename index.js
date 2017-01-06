/**
 * Created by heyufeng on 17/1/4.
 */
'use strict';
const seneca = require('seneca');
const nconf = require('nconf');
nconf.argv().env();
const env = process.env.NODE_ENV || 'development';
nconf.file({file: 'config.' + env + '.json'});
require('./mongoose');

const exampleLib = require('./register/example');

function log () {
  this.sub('role:customer, cmd:*', (msg) => {
    // TODO 调用log模块
  });
}

seneca({log: {level: 'error+'}})
  .use(log)
  .use(exampleLib.example) //注册服务
  .listen({type: 'http', port: nconf.get('seneca:exampleEndpoint:port')});