let user = require('../user.js');

module.exports = {

  getName: function(req, res, next) {
    let name = user.name;
    res.json(name);
  },

  getLocation: function(req, res, next) {
    let location = user.location;
    res.json(location);
  },

  getOccupations: function(req, res, next) {
    let occupations = user.occupations;
    res.json(occupations);
  }
  
};
