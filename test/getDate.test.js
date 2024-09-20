var assert = require("assert");
const { getDate } = require("../utils");

describe("Testing if date works", function () {
  it("should return a date", function () {
    const date = getDate();

    assert.equal(typeof date, "string");
  });
});
