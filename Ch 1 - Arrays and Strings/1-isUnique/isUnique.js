//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  //code
  // with more data structures
  // use object to store what you find in str
  // if something found appears again then
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]] != undefined) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
  // without
}

module.exports = isUnique;
