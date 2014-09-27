# next-done

Countdown your callbacks

[![Build Status](https://secure.travis-ci.org/shuvalov-anton/next-done.png)](http://travis-ci.org/shuvalov-anton/next-done)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/next-done.png)](https://codeclimate.com/github/shuvalov-anton/next-done)

## Install

    npm i --save next-done

## Example

    var Countdown = require('next-done');
    var modules   = require('../modules')

    module.exports = function(done) {
      var next = new Countdown(Object.keys(modules).length, done)
      for (var key in modules) new Compilation(modules[key], next);
    }
