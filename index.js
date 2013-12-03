'use strict';

module.exports = function (count, done) {
  if (!('function' === typeof done)) throw new Error('`done` must be a function');
  return function (err) {
    (!--count || err)
      ? done(err)
      : null;
  };
};
