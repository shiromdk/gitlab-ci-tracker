'use strict';
const users = require('./webhooks');

module.exports = app => {
  app.use('/webhooks', users);
};
