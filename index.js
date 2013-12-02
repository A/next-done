'use strict';

module.exports = function (count, done) {
  if (!'function' === typeof done) throw new Error('`done` must be a function');
  return function (err) {
    err
      ? done(err)
      : --count
        ? null
        : done();
  };
};
