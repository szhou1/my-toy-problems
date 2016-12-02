
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */



var Tree = function(name) {
  this.name = name;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(c1, c2) {

  var c1path = this.getAncestorPath(c1).reverse();
  var c2path = this.getAncestorPath(c2).reverse();
  // console.log(c1path, c2path);
  for(var i=0; i< Math.min(c1path.length, c2path.length); i++) {
    // console.log(c1path[i].name, c2path[i].name);
    if(c1path[i] === c2path[i]) {
      // console.log('found getClosestCommonAncestor', c1path[i]);
      return c1path[i];
    }
  }

};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child) {
  if(this.isDescendant(child)=== false) {
    return undefined;
  }

  var path = [];
  function getPath(ancestor, child) {

    for(var i=0; i<ancestor.children.length; i++) {
      var parent = ancestor.children[i];
      if(parent.isDescendant(child)){
        path.push(ancestor);
        // console.log('is descendant', parent)
        path.push(parent);
        getPath(parent, child);
        break;
      } else if (parent === child) {
        path.push(parent);
        break;

      }
    }
  };

  getPath(this, child);
  return path;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// example usage:
var grandma = new Tree('grandma');
var mom = new Tree('mom');
grandma.addChild(mom);
var me = new Tree('me');
mom.addChild(me);
var brother = new Tree('bro');
mom.addChild(brother);

grandma.getClosestCommonAncestor(me, brother);

var path = grandma.getAncestorPath(me); // => [grandma, mom, me]
console.log('path', path);
