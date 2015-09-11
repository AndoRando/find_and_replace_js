describe("findAndReplace", function() {
  it("replaces a given word with a given alternate word", function() {
    expect(findAndReplace("Bell", "bell", "tolls")).to.eql("tolls");
  });
});
