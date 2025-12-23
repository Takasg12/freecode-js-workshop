const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput)

/* Menggunakan metode trim / menghapus spasi di kedua ujung */
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

/* Menggunakan metode trimStart / menghapus spasi di ujung kiri */
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:")
console.log(trimmedStart);

/* Menggunakan metode trimEnd / menghapus spasi di ujung kanan */
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:")
console.log(trimmedEnd);

/* Menggunakan metode toUpperCase / mengubah semua karakter menjadi huruf besar */
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

/* Menggunakan metode toLowerCase / mengubah semua karakter menjadi huruf kecil */
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);