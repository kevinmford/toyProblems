function longestWord(sentence) {
  var words = sentence.split(" ");
  var longest = "";
  for (var i=0; i<words.length; i++) {
    if (words[i].length>longest.length) {
      longest = words[i];
    }
  }
  return longest;
}