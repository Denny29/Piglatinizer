import "./styles.css";

let userInput;
let result;

$("button").click(function () {
  userInput = $(".input").val();
  console.log(userInput);
});

// RULES FOR PIGLATIN
// 1. If the word doesn't begin with a vowel:
//  Move all the letters before the first vowel
//  to the end of the word.
//  Add "-ay" to the end of the word.

// 2. If the word does begin with a vowel:
//   Add “-yay”, “-way”, or “-ay” at the end of the original word.

// 3. There is a rule for composite words,
//    but I could do that at the end.
