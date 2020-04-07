
var everything = document.getElementsByTagName("body");

for (var i = 0; i < everything.length; i++) {
  var txt = everything[i].innerHTML;
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j].charAt(0) !== '<') {
      tokens[j] = tokens[j].replace(/\bthe\b/gi,'<span class="size1">the</span>');
      tokens[j] = tokens[j].replace(/\bbe\b/gi,'<span class="size2">be</span>');
      tokens[j] = tokens[j].replace(/\bto\b/gi,'<span class="size3">to</span>');
      tokens[j] = tokens[j].replace(/\bof\b/gi,'<span class="size4">of</span>');
      tokens[j] = tokens[j].replace(/\band\b/gi,'<span class="size5">and</span>');

    }
  }
  everything[i].innerHTML = tokens.join('');
}
