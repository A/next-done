'use strict';

module.exports = function (count, cb) {

  var done = (function () {
    var isDone = false;
    return function (err) {
      if (isDone) throw new Error ('`done` called multiple times.');
      isDone = true;
      cb(err);
    }
  })();


  return function (err) {
    (--count <= 0 || err)
      ? done(err)
      : void 0;
  };

};