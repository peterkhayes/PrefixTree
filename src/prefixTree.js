var makePrefixTree = function() {
  var baseDictionary = {};

  return {
    guess: function(string) {
      var dictionary = baseDictionary;
      
      var initial = string.slice(0,1); // This will be the key.
      var rest = string.slice(1); // This will be passed on to the next level.

      while (rest.length) {
        if (dictionary[initial]) {
          dictionary = dictionary[initial];
          initial = rest.slice(0,1);
          rest = rest.slice(1);
        } else {
          return [];
        }
      }
      if (dictionary[initial]) {
        return this.enumerate(dictionary[initial]).sort();
      }
      return [];
    },
    enumerate: function(dictionary) {
      var result = [];
      if (dictionary['word']) {
        result.push(dictionary['word']);
      }
      for (var key in dictionary) {
        if (key !== 'word') {
          result = result.concat(this.enumerate(dictionary[key]));
        }
      }
      return result;
    },
    buildFromCorpus: function(wordList) {
      for (var i = 0, len = wordList.length; i < len; i++) {
        var word = wordList[i];
        this.add(baseDictionary, word, word);
      }
    },
    add: function(dictionary, currentString, wholeWord) {
      if (currentString.length === 0) {
        dictionary['word'] = wholeWord;  // 'word' stores a word that terminates there.
      } else {
        var initial = currentString.slice(0,1); // This will be the key.
        var rest = currentString.slice(1); // This will be passed on to the next level.
        
        if (!dictionary[initial]) {
          dictionary[initial] = {};
        }

        this.add(dictionary[initial], rest, wholeWord);
      }
    }
  };
};