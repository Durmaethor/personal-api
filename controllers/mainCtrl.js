let user = require('../user.js');

module.exports = {
  getName: function(req, res, next) {
    let name = user.name;
    res.json(name);
  }
};
