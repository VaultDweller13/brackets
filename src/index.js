module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];
    const currentConfig = bracketsConfig.find((item) => item.includes(currentBracket));
    const openingBracket = currentConfig[0];
    const closingBracket = currentConfig[1];
   
    if (currentBracket === closingBracket && stack[stack.length - 1] === openingBracket) {
      stack.pop();
    } else stack.push(currentBracket);
  }
 
  return !stack.length;
}

