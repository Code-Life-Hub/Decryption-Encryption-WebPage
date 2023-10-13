// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    function substitution(input, alphabet, encode = true) {
      if (!alphabet || alphabet.length !== 26) return false;
      const alphabetArray = alphabet.split("");
      const alphabetSet = new Set(alphabetArray);
      if (alphabetArray.length !== alphabetSet.size) return false;
  
      let results = "";
      const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
      const normalInput = input.toLowerCase();
  
      for (let i = 0; i < normalInput.length; i++) {
        const currentChar = normalInput[i];
  
        if (currentChar === " ") {
          results += " ";
          continue;
        }
  
        const index = encode
          ? standardAlphabet.indexOf(currentChar)
          : alphabet.indexOf(currentChar);
  
        // Check for unexpected characters
        if (index === -1) {
          results += '';  // Remove unexpected characters
          continue;
        }
  
        const substitutionChar = encode ? alphabet[index] : standardAlphabet[index];
  
        // Ensure substitutionChar isn't undefined before appending
        if (!substitutionChar) {
          results += ''; // Remove undefined substitutions
        } else {
          results += substitutionChar;
        }
      }
  
      return results;
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = substitutionModule;
  