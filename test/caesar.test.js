// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Cipher", () => {
    it("should encode the input string with a positive shift", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });

    it("should decode the input string with a negative shift", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", -3);
        expect(actual).to.equal(expected);
    });

    it("should return false for invalid shift values", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });
});
