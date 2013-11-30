'use strict';

module.exports = function (count, done) {
  if (!done) throw new Error('`done` must be a function');
  return function (err) {
    --count
      ? null
      : done(err);
  };
};