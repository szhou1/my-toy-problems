// function bind():

// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'
// example 2:
// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true



var bind = function(fn, obj) {
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();
  
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    args = args.concat(args2);
    args.shift();
    if(obj){
      return fn.apply(obj, args);
    } else {
      return fn.apply(context, args)
    }
  };
};

// Function.prototype.bind:
// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
// boundShout(); // alerts 'bob'
// example 2:
// var func = function(a, b){ return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true


Function.prototype.bind = function(
) {
  // TODO: Your code here
};
