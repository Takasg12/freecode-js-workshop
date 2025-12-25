const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

/* Replace / Mengganti kata cats menjadi dogs*/
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

/* Menggunakan replaceAll() untuk mengganti semua kemunculan kata "cats" dengan "dogs" */
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

/* Mengulang kata "love" tiga kali menggunakan repeat() */
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);


const newSentence = "I " + repeatedLove + " learning.";
console.log(newSentence);