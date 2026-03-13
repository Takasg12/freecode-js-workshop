const getVowelCount = (sentence) => {
    //Daftar huruf vokal (bisa huruf kecil atau besar)
    let count = 0;
    const vowels = 'aeiou';

    //Loop melalui setiap karakter dalam kalimat
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++
        }
    }
    return count
}

const getConsonantCount = (sentence) => {
    let count = 0;
    const vowels = 'aeiou';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i].toLowerCase();
        if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const getPunctuationCount = (sentence) => {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i]
        if (!(char >= 'a' && char <= 'z') &&
            !(char >= 'A' && char <= 'Z') &&
            char !== ' ') {
            count++;
        }
    }
    return count;
}

const getWordCount = (sentence) => {
    if (sentence.trim().length === 0) {
        return 0;
    }
    return sentence.trim().split(/\s+/).length
}


const vowelCount = getVowelCount("Apples are tasty fruits")
console.log(`Vowel Count: ${vowelCount}`)

const consonantCount = getConsonantCount("Coding is fun")
console.log(`Consonant Count: ${consonantCount}`)

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?")
console.log(`Punctuation Count: ${punctuationCount}`)

const wordCount = getWordCount("I love freeCodeCamp")
console.log(`Word Count: ${wordCount}`)