// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Message to be encoded below
// This is not working like it is designed to.

// encoded output below
// 44324234 4234 334344 25432452423322 13425251 4244 4234 4151344222335141 4443

// decoded output below
// th(i/j)s (i/j)s not work(i/j)ng l(i/j)ke (i/j)t (i/j)s des(i/j)gned to

const polybiusModule = (function () {
  function polybius(input, encode = true) {
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
      j: "56", // Unique code for 'j'
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

    if (encode) {
      return input
        .split("")
        .map((letters) => {
          if (letters === " ") return letters;
          return polybiusSquare[letters.toLowerCase()];
        })
        .join("");
    } else {
      const inputArray = input.split(" ");
      let decodedMessage = "";
      for (let numbers of inputArray) {
        if (numbers.length % 2 !== 0) return false;
        for (let i = 0; i < numbers.length; i += 2) {
          const pair = numbers.slice(i, i + 2);
          const key = Object.keys(polybiusSquare).find(
            (key) => polybiusSquare[key] === pair
          );
          decodedMessage += key || ""; // directly append the key (either "i" or "j" or any other char)
        }
        decodedMessage += " ";
      }
      return decodedMessage.trim();
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
