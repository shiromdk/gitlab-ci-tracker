'use strict';
// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const options = {
  poolSize:100
}
mongoose.connect(process.env.TEST_URI,options).catch(err=>{
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mountRoutes(app);


app.listen(process.env.PORT || 8050, () => {
  if (process.env.PORT) {
    console.log(`Server is running on http://localhost:${process.env.PORT}
      or http://127.0.0.1:${process.env.PORT}`);
  } else {
    console.log('Server is running on http://localhost:8050 ' +
    'or http://127.0.0.1:8050');
  }

});
