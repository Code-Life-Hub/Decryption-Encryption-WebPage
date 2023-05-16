// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it("should return a string", () => {
        const actual = polybius("thinkful");
        expect(actual).to.be.a("string");
    });
    it("should return a string of numbers", () => {
        const actual = polybius("thinkful");
        expect(actual).to.equal("4432423352125413");
    });
    it("should return a string of letters", () => {
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal("hello world");
    });
    it("should ignore capital letters", () => {
        const actual = polybius("Hello World");
        expect(actual).to.equal("3251131343 2543241341");
    });
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const actual = polybius("Hello World");
        expect(actual).to.equal("3251131343 2543241341");
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius("thinkful");
        expect(actual).to.equal("4432423352125413");
    });
});
