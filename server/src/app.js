const express = require('express');
const app = express();
const morgan = require('morgan');
// const helmet = require('helmet');
// const compression = require('compression');
const db = require('./config/database.config');

//connect db
db.connect();

//use middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


module.exports = app;

app.get('/', (req, res) => {
    res.json({ hello: "hello dvd" })
})