# Countdown your callbacks

var Countdown = require('next-done');
var modules   = require('../modules')

module.exports = function(done) {
  var next = new Countdown(Object.keys(modules), done)
  for (var key in modules) new Compilation(modules[key], next);
}