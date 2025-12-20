/* cara menggunakan includes() */
const fccSentence = "freeCodeCamp is a great place to learn web development.";
console.log("Here are some examples of the includes() method:");

/* Membuat variable const hasFreeCodeCamp */
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

/* Membuat variable const hasJavaScript */
const hasJavaScript = fccSentence.includes("JavaScript");

console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

/* Membuat variable const hasLowercaseFCC */
const hasLowercaseFCC = fccSentence.includes("freecodecamp");

console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);


/* Cara menggunakan slice() */
const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

/* Membuat variable baru platform */
const platform = message.slice(11, 23);
console.log('The word "' + platform + '" was sliced from the message.');

const greetingWord = message.slice(0, 7);
console.log('The first word is "' + greetingWord + '".');

/* Membuat variable baru endPunctuation */
const endPunctuation = message.slice(-1);
console.log('The ending punctuation mark is a "' + endPunctuation + '"');


console.log(" Workshop complete! You now know how to use includes() and slice().");