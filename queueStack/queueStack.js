/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.stack = [];
  this.count = 0;


  // add an item to the top of the stack
  this.push = function(item) {
    this.stack[this.count] = item;
    this.count++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    var result = this.stack[this.count-1];

    this.stack[this.count - 1] = null;
    this.count--;
    return result;
  };

  // return the number of items in the stack
  this.size = function() {
    return this.count;
  };
};

// var stack = new Stack();
// stack.push(1);
// console.log(stack.size());
// console.log(stack.pop());
// stack.push(2);
// stack.push(3);
// console.log(stack.size());



/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if (outbox.size() === 0) {
      while(inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };
 
  // should return the number of items in the queue
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};

// var queue = new Queue();
// queue.enqueue(10);
// console.log(queue.size());
// console.log(queue.dequeue());
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.size());
// console.log(queue.dequeue());
