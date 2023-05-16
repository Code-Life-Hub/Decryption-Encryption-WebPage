// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        // your solution code here
        // create a `polybius square` Object
        const polybiusSquare = {
            a: "11",
            b: "21",
            c: "31",
            d: "41",
            e: "51",
            f: "12",
            g: "22",
            h: "32",
            i: "42",
            j: "42",
            k: "52",
            l: "13",
            m: "23",
            n: "33",
            o: "43",
            p: "53",
            q: "14",
            r: "24",
            s: "34",
            t: "44",
            u: "54",
            v: "15",
            w: "25",
            x: "35",
            y: "45",
            z: "55",
        };
        // check if `encode` is `false`
        if (encode) {
            return input
                .split("") //<--`.split` the `input string` into an array of letters removing the quotes
                .map((letters) => {
                    //<--`.map` over the array of letters
                    if (letters === " ") return letters; //<--if the character is a space, `return` the space
                    return polybiusSquare[letters.toLowerCase()]; // abide the case sensitivity by converting the `letters` to `lowercase`
                })
                .join(""); //<--`.join` the array of letters into a `"string"`
        } else {
            const inputArray = input.split(" "); // `.split` the `input` by spaces
            let decodedMessage = ""; 
            for (let numbers of inputArray) { // `for` through the `inputArray`
                if (numbers.length % 2 !== 0) return false; // `if` the numbers `length` is Odd, `return false`
                // `for` through the numbers by `2`
                for (let i = 0; i < numbers.length; i += 2) {
                    const pair = numbers.slice(i, i + 2); // create a `variable` to store the `pair` of numbers
                    // `find` the `key` in the `polybius square` that matches the `pair` of numbers
                    const key = Object.keys(polybiusSquare).find(
                        (key) => polybiusSquare[key] === pair // return the matching key
                    );
                    decodedMessage += key ? (key === "i" ? "(i/j)" : key) : "";
                }
                decodedMessage += " "; // `add` a space after each numbers
            }
            return decodedMessage.trim(); // `remove` extra space from the last numbers right before the `return`
        }
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
