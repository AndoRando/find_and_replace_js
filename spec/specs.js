describe("findAndReplace", function() {
  it("replaces a given word with a given alternate word", function() {
    expect(findAndReplace("Bell", "Bell", "Tolls")).to.eql("tolls");
  });

  it("replaces a given word inside a string of words with a given alternate word", function() {
    expect(findAndReplace("When the Bell Tolls", "Bell", "Bells")).to.eql("when the bells tolls");
  });
});
