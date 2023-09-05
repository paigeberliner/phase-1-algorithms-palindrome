function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
  if(string === reversedString)
    return true; 
    else 
    return false;
  
}

/* 
  if string === reversed string
  return true 
  else 
  return false

*/

/*
  reversed string = split string into each letter -> reverse the order of the letter -> rejoin each letter into an individual string 
  if string === reversed string it will return true
  if not, it will return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
