// module.exports = function check(str, bracketsConfig) {
 
// }

function check(str, bracketsConfig) {
  let isOpen = false;

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];
    const currentBracketsPair = bracketsConfig.find((item) => item.includes(currentBracket));
    const openingBracket = currentBracketsPair[0];
    const closingBracket = currentBracketsPair[1];

    console.log(`\n---------- Cycle ${i + 1} starts ----------`);
    console.log(`Brackets status: ${isOpen ? 'open' : 'closed'}`);
    console.log(`Current bracket at index ${i}: ${currentBracket}`);
    console.log(`Current brackets pair:  ${currentBracketsPair.join('')}`);

    if (currentBracket === openingBracket && !isOpen) {
      console.log(`Brackets open, current bracket ${currentBracket}`);

      isOpen = true;
    } else if (currentBracket === openingBracket && isOpen) {
      //check(str.slice[i])
    } else if (currentBracket === closingBracket && isOpen) {
      console.log(`Brackets closed, current bracket ${currentBracket}`);

      isOpen = false;
      // return true;
    } else if (currentBracket === closingBracket && !isOpen) {
      console.log(`Closing bracket, without opening one, current bracket ${currentBracket}`);
      console.log(`Closing bracket ${closingBracket}`);

      return false;
    }
  }

  return !isOpen;
}

console.log(check('[()]()', [['(', ')'], ['[', ']']]));
