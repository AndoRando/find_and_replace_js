describe("findAndReplace", function() {
  it("downcases and splits a given string into an array of words", function() {
    expect(findAndReplace("When the Bell Tolls")).to.eql(["when", "the", "bell", "tolls"]);
  });
});
