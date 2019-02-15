require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const {CONNECTION_STRING} = process.env
const ctrl = require('./controller');

const app = express();
app.use(express.json());

app.get('/api/inventory', ctrl.getInventory)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('connected to db');
})

app.listen(3333, () => console.log('Ready to Rock!'))
