describe("prefixTree", function() {

  var p;

  beforeEach(function() {
    p = makePrefixTree();
  });

  it("should have method 'guess'", function() {
    expect(p['guess']).toEqual(jasmine.any(Function));
  });

  it("should return an array of guesses when guess is called, in sorted order", function() {
    p.buildFromCorpus(["ab", "abc", "a", "b", "ba", "bca"]); // Passing a dictionary.
    expect(p.guess("a")).toEqual(["a", "ab", "abc"]);
  });


  it("should work like autocomplete", function() {
    p.buildFromCorpus(corpus); // Passing the scrabble dictionary, defined in corpus.js
    expect(p.guess("A").length).toBeGreaterThan(100);
    expect(p.guess("RHINOC")).toEqual(["RHINOCERI", "RHINOCEROS", "RHINOCEROSES"]);
  });

  /** Not yet... save memory.
  it("should work like T9", function() {
  });

  it("should work with numbers", function() {
    p.buildFromCorpus([1, 123456, 42353, 14342, 9302, 0]);
    expect(p.guess(1)).toEqual([1, 14342, 123456]);
  });

  it("should rank results according to a frequency value", function() {
  
  });
  */
});
