'use strict';
const webhooks = require('./webhooks');

module.exports = app => {
  app.use('/webhooks', webhooks);
};
