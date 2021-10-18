"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;

var _require2 = require('../extensions/list-node.js'),
    ListNode = _require2.ListNode;
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


module.exports =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = [];
  }

  _createClass(Queue, [{
    key: "getUnderlyingList",
    value: function getUnderlyingList() {
      throw new NotImplementedError('Not implemented'); // remove line with error and write your code here
    }
  }, {
    key: "enqueue",
    value: function enqueue(value) {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.queue.push(value);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      return this.queue.shift();
    }
  }]);

  return Queue;
}();