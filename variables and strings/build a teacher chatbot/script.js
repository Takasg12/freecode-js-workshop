console.log("Hi there!");

const botName = "teacherBot";

/* variable baru */
const greeting = `My name is ${botName}.`;

/* Memanggil dan variable greeting dan botName */
console.log(greeting);

/* Membuat 2 Variable baru dengan nama, subjeck dan topic, learningIsFunSentence */
const subject = "JavaScript";
const topic = "strings";
const learningIsFunSentence = "Learning is fun.";

/* Memanggil variable subject dan topic */
const sentence = `Today, you  will learn about ${topic} in ${subject}.`;
console.log(sentence);

/* Membuat variable baru strLengthIntro */
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
const lastCharacter = subject[subject.length - 1];

console.log(strLengthIntro);
console.log(subject.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

console.log(lastCharacter);


/* Memanggil variable topic */
console.log(`Here is an example of using the length property on the world ${topic}.`);
console.log(topic.length);


/* Memanggil variable learningIsFunSentence */
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");