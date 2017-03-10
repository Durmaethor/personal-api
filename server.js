
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

module.exports = {
  myFunction: function(req, res) {
    /*...*/
  },

  anotherFunction: function(req, res) {
    /*...*/
  }
}