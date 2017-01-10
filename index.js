/**
 * Created by heyufeng on 17/1/4.
 */
'use strict';
const seneca = require('seneca');
const nconf = require('nconf');
nconf.argv().env();
const env = process.env.NODE_ENV || 'development';
const Xlog = require('xyj-logger');
const logger = Xlog.Logger('logs'); //此处可传自定义字符串代替__filename
nconf.file({file: 'config.' + env + '.json'});
require('./mongoose');

const exampleLib = require('./register/example');

function log () {
  this.sub('role:customer, cmd:*', (msg) => {
    let needMsg = { role: msg.role, cmd: msg.cmd, data: msg.data }
    logger.debug(needMsg);
  });
}

seneca({log: {level: 'error+'}})
  .use(log)
  .use(exampleLib.example) //注册服务
  .listen({type: 'http', port: nconf.get('seneca:exampleEndpoint:port')});