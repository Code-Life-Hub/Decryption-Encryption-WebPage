const caesarModule = (function () {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        // your solution code here BELOW
        // check if shift is not present, equal to 0, less than -25, or greater than 25
        if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
        // check if encode is false
        if (!encode) shift *= -1; //<--switch the direction of the shift
        // create an array of the alphabet
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //<--split the string into an array of letters removing the quotes
        // create an array of the input
        const inputArray = input.toLowerCase().split("");
        // create an array to store the encoded/decoded message
        const encodedArray = [];
        // loop through the input array
        inputArray.forEach((letter) => {
            // check if the letter is in the alphabet using .includes()
            if (alphabet.includes(letter)) {
                // add the shifted letter to the encoded array using .push()
                encodedArray.push(
                    alphabet[ //<use the alphabet array to find the index of the shifted letter
                        (alphabet.indexOf(letter) + shift + alphabet.length) %
                            alphabet.length
                    ]
                );
            } else {
                // if the letter is not in the alphabet
                // add the original letter to the encoded array
                encodedArray.push(letter);
            }
        });
        // join the encoded array into a string and return it
        return encodedArray.join("");
    }
    return {
        // return the object with the method
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
