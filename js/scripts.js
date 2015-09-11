var findAndReplace = function(original, find, replace) {
  var original = original.toLowerCase().split(" ");
  var find = find.toLowerCase();
  var replace = replace.toLowerCase();

  original.forEach(function(word) {
    if (word == find) {
      original[original.indexOf(word)] = replace;
    }
  });

  return original.join(" ");
};
