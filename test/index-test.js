const { expect } = require("chai");
const { name, height, gender, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });
  
  describe("Gender", () => {
    it("Returns the gender", () => {
      expect(gender).toEqual("Female");
    });
  });

  
  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
      expect(message).toInclude(gender);
    });
  });
});
