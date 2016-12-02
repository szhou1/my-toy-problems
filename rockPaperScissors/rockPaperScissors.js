/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
var rockPaperScissors = function (roundSize) {
  var res = [];
  var roundSize = roundSize || 3;
  var poss = [{value: "rock", children:[]},
			  {value:"paper", children:[]},
			  {value:"scissors",children:[]}];
  var treeRoot = {value: "ROOT", children:[]};

  var buildTree = function(tree, depth){
  	// console.log(tree)
  	// console.log(depth)
   	if(depth >= roundSize){
   		return;
   	}
   	else {
   		// populate empty node
   		tree.children = [{value: "rock", children:[]},
			  {value:"paper", children:[]},
			  {value:"scissors",children:[]}];
			  
   		tree.children.forEach(function(child){
   			buildTree(child, depth + 1);
   		});
   	}
   	return tree;
  }
  
  var tree = buildTree(treeRoot, 0);

  var total = [];
  var traverseTree = function(tree, combinationArr, depth){
  	// console.log(tree.value)
	if(depth >= roundSize -1){
		tree.children.forEach(function(child, i){
			var copyArray = combinationArr.slice();
			copyArray.push(child.value);
			total.push(copyArray);
		});
	} else {
		tree.children.forEach(function(child, i){
			var copyArray = combinationArr.slice();
			copyArray.push(child.value);
			traverseTree(child, copyArray, depth + 1);
		});
	}
  	
  }
  
  traverseTree(tree, [], 0);
  //console.log("TOTAL")
  console.log(total)
  return total;
  
};
