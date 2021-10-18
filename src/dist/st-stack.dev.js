"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


module.exports =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.stack = [];
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.stack.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      return this.stack.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
      } else {
        return undefined;
      }
    }
  }]);

  return Stack;
}();