/**
 * @ngdoc     overview
 * @name      alquimia
 * @author    Mauro Constantinescu <mauro.constantinescu@gmail.com>
 * @copyright © 2015 White, Red & Green Digital S.r.l.
 *
 * @description
 * The `alquimia` module provides utility objects for using the Alquimia framework as efficiently as possible.
 */
let deps = [];

if (global.wp) {
  if (global.oauth) {
    deps.push('ngCookies');
  }
}

if (global.slideshow) {
  deps.push('ngAlquimia.slideshow');
}

var module = angular.module('ngAlquimia', deps);

if (global.dev) {
  module.directive('a', require('./d-a'));
}

if (global.wp) {
  module.provider('WPApi', require('./p-wp-api'));

  if (global.oauth) {
    module.provider('oauth', require('./p-oauth'));
  }
}

if (global.background) {
  module.directive('qBackground', require('./d-q-background'));
}

if (global.slideshow) {
  require('./slideshow');
}
