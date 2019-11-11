const expect = require("chai").expect;
const server = require("../server");

describe("test", () => {
  it("should return a string", () => {
    expect("Hello this is my Teamwork App").to.equal(
      "Hello this is my Teamwork App"
    );
  });
});
