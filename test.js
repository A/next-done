/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */

var Countdown      = require('./index');
var assert         = require('assert');

// End of dependencies.

describe('test', function(){

  /**
   * No route
   */
  it('next 3 times', function(done){
    var next = new Countdown(3, done);
    next();
    next();
    next();
  });

});