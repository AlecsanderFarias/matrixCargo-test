/* eslint-disable no-console */

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const { PORT = 4500 } = process.env;
/* 
const express = require('express'); */
const app = require('./src/app');

/* app.use('/docs', express.static(__dirname + '/docs'));
 */
app.listen(PORT, () => {
  console.log(`[API] Server is running at ${PORT}`);
});

if (process.env.NODE_ENV !== 'test') console.log = function () {};
