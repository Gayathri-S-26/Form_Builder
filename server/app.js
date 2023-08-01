//app.js

const express = require('express');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/forms', formRoutes);

module.exports = app;
