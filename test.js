/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */

var Countdown      = require('./index');
var assert         = require('assert');

// End of dependencies.

describe('new Route()', function(){

  /**
   * No route
   */
  it('Must returns 404', function(done){
    var next = new Countdown(3, done);
    next();
    next();
    next();
  });

});