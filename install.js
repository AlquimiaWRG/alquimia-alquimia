"use strict";

module.exports = function(done) {
  var fs = require('fs');
  fs.mkdirSync('app/src/angular-alquimia');
  alquimia.copy(__dirname + '/assets/angular-alquimia', 'app/src/angular-alquimia');
  done();
};
