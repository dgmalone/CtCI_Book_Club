// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(head) {
  // solution
  // keep a list of values already used
  // when a value alaready used is reached then delete that node
  let curNode = head;
  let previous;
  let dupList = {};
  while(curNode) {
    if(dupList[curNode.val] === undefined) {
      dupList[curNode.val] = 1
      previous = curNode;
      curNode = curNode.next;
    } else {
      previous.next = curNode.next;
      curNode.next = null;
      curNode = previous.next;
    }
  }
  return head;
}

module.exports = removeDups;
