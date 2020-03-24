const express = require('express');
const db = require('./db/db.js');
const router = require('./routes/index');
const app = express();
router(app)
app.listen('3000', (req,res) => {
  console.log('jingjing')
})

