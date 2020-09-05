// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



function high(x){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let words = x.split(' ');
    let word = words[0];
    let hiScoringWord = words.split(' ');
    for (let word of words) {
        word = words.split(' ');
    }
    return hiScoringWord;
    // let hiScoringWord = words.reduce((accum, words) => {
    //     console.log(words);

    // //  words
    // // return word;
    // }, []);


}



console.log(high('man i need a taxi up to ubud'));
// Test.describe("Example tests",_=>{
//     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
//     Test.assertEquals(high('take me to semynak'), 'semynak');
//     });