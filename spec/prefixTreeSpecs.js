describe("prefixTree", function() {

  it("should have method 'guess' and value 'dictionary'", function() {
    var p = makePrefixTree([]);
    expect('dictionary' in p).toBe(true);
    expect(p['guess']).toEqual(jasmine.any(Function));
  });

  it("should return an array of guesses when guess is called, in sorted order", function() {
    var p = makePrefixTree(["ab", "abc", "a", "b", "ba", "bca"]); // Passing a dictionary.
    expect(p.guess("a")).toEqual(["a", "ab", "abc"]);
  });

  it("should work like autocomplete", function() {
    var p = makePrefixTree(corpus); // Passing the scrabble dictionary, defined in corpus.js
    expect(p.guess("A").length).toBeGreaterThan(100);
    expect(p.guess("RHINOC")).toEqual(["RHINOCEROS", "RHINOCERI", "RHINOCEROSES"]);
  });

  it("should work like T9", function() {
    return false;
  });

  it("should work with numbers", function() {
    var p = makePrefixTree([1, 123456, 42353, 14342, 9302, 0]);
    expect(p.guess(1)).toEqual([1, 14342, 123456]);
  });

  /** BONUS MODE
  it("should rank results according to a frequency value", function() {
  
  });
  */
});
