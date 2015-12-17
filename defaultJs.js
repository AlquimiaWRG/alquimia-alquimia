"use strict";

module.exports = function(defaultJs) {
  defaultJs.splice(1, 0, {
    name: 'alquimia',
    elements: {
      dev: alquimia.env === alquimia.ENV_DEV
    },
    compile: function compileAlquimia() {
      var res = [];

      for (var i in this.elements) { res.push('global.' + i + ' = true;'); }
      res.push("require('./angular-alquimia');");
      res = '  ' + res.join('\n  ');
      return res;
    }
  });

  return defaultJs;
};
