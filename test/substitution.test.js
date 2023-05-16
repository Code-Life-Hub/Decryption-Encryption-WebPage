// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;
describe("substitution", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long.", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it("should correctly translate the given phrase, based on the alphabet given to the function.", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should return false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it("should maintain spaces in the message, before and after encoding or decoding.", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(
            "You are an excellent spy",
            "xoyqmcgrukswaflnthdjpzibev"
        );
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters.", () => {
        const expected = "jrufscpw";
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
});
