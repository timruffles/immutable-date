var assert = require("chai").assert;
var ImmutableDate = require("./index.js");

describe("ImmutableDate",function() {
  before(function() {
    id = new ImmutableDate(Date.parse("2013-02-27"));
  });
  it("doesn't mutate the original date",function() {
    var originalStamp = +id;
    var id2 = id.setUTCDate(50);
    assert.equal(originalStamp,+id);
  })
  it("has created a new date",function() {
    var id2 = id.setUTCDate(28);
    assert.equal(id2.getUTCDate(),28);
  })
});
