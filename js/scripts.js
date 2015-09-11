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

$(function() {
  $("form#find_and_replace").submit(function(event) {
    var originalSentence = $("input#original_sentence").val();
    var find = $("input#find").val();
    var replace = $("input#replace").val();

    var result = findAndReplace(originalSentence, find, replace);

    $(".new_sentence").text(result);

    event.preventDefault();
  });
});
