const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config();
require('./config/database').connect();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Hello World')
})

module.exports = app;