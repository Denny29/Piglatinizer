import "./styles.css";

let userInput;
let result = "";
let words;
let firstLetter;

$("button").click(function () {
  userInput = $(".input").val();
  words = userInput.split(" ");
  // console.log(words);
  for (let word of words) {
    if (word[0] === "a" || "e" || "i" || "o" || "u") {
      add(word);
    } else {
      firstLetter = word.slice(0, 1);
      word = word.slice(1);
      word = word + firstLetter;
      add(word);
    }
  }
  $(".output").html(`<h3> ${result} </h3>`);
});

function add(theWord) {
  theWord = theWord + "ay";
  result = result + theWord + " ";
  console.log(theWord);
}

// RULES FOR PIGLATIN
// 1. If the word doesn't begin with a vowel (a, e, i, o, u):
//  Move all the letters before the first vowel
//  to the end of the word.
//  Add "-ay" to the end of the word.

// 2. If the word does begin with a vowel:
//   Add “-yay”, “-way”, or “-ay” at the end of the original word.

// 3. There is a rule for composite words,
//    but I could do that at the end.
