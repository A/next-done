/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */

var Countdown      = require('./index');
var assert         = require('assert');
var should         = require('should');

// End of dependencies.


describe('test', function(){

  it('should next 3 times, then done', function(done){
    var next = new Countdown(3, done);
    next();
    next();
    next();
  });


  it('should return error', function(done){
    var next = new Countdown(1, function (err) {
      should.exist(err);
      done();
    });
    next(new Error('Test if error'));
  });


  it('should return error and other next() calls must throw errors', function(done){
    var next = new Countdown(2, function (err) {
      // called only once
      should.exist(err);
    });
 
    next(new Error('Just some error'));

    try {
      next(); // throw error
    } catch (err) {
      assert(err.toString() === 'Error: `done` called multiple times.');
      done()
    }
  });

});