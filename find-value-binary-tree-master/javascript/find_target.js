
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  // Check if we've reached the end of the tree
  if (root === null) {
    return null;
  }

  // Check if the current node's value matches the target
  if (root.value === target) {
    return root;
  }

  // Recursively search in the left and right subtrees
  const leftResult = findTarget(root.left, target);
  const rightResult = findTarget(root.right, target);

  // Check if we found the target in either subtree
  if (leftResult !== null) {
    return leftResult;
  }

  if (rightResult !== null) {
    return rightResult;
  }

  // If we haven't found the target, return null
  return null;
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
//Pseudocode: function findTarget(root, target):
   // if root is null:
       // return null
    //if root.value is equal to target:
       // return root
   // leftResult = findTarget(root.left, target)
   // rightResult = findTarget(root.right, target)
   // ifResult is not null:
        //return leftResult
    //rightResult is not:
       // return rightResult    return null

///  first check if the root is null. If it is, we return null because we have reached the end of the tree without finding the target value.

//Next, we check if the value of the root node is equal to the target. If they are equal, we return the root node because we have found the target value.

//If the root value is not equal to the target, we recursively call the findTarget function on the left and right child nodes of the root and store the results in leftResult and rightResult variables.

//Finally, we check if either leftResult or rightResult is not null. If either of them is not null, we return the non-null result because we have found the target value in either the left or right subtree.
//  ifboth leftResult and rightResult are null, we haven't found the target value in the current subtree or any of its children, so we return null.