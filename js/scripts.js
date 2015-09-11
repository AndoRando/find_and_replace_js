var findAndReplace = function(original, find, replace) {
  var original = original.toLowerCase().split(" ");
  var find = find.toLowerCase();
  var replace = replace.toLowerCase();

  if (original == find) {
    original = replace;
  }

  return original;
};
