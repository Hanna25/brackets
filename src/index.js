module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let allBracketsPairs = {};
  let closeBrakets = [], identicalBrackets = [];

  for (var i in bracketsConfig) {
    allBracketsPairs[bracketsConfig[i][0]] = bracketsConfig[i][1]  
    allBracketsPairs[bracketsConfig[i][1]] = bracketsConfig[i][0]
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      identicalBrackets.push(bracketsConfig[i][0])
    } else {
      closeBrakets.push(bracketsConfig[i][1])
    }
  }

  let result = true;

  stack.push(str.charAt(0))

  for (var i = 1; i < str.length; i++) {   
    if (closeBrakets.includes(str.charAt(i))) {
      if (stack.pop() !== allBracketsPairs[str.charAt(i)]) {
        result = false;
        break;
      }
    } else {      
      if (identicalBrackets.includes(str.charAt(i))) {
        if(stack[stack.length - 1] == str.charAt(i)) {          
          stack.pop();
        } else {
          stack.push(str.charAt(i))
        }
      } else {
        stack.push(str.charAt(i))
      }
    }
    
  }

  result = stack.length ? false : result;
  return result;
}
