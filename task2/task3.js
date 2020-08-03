// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord (string = "") {
  let words = string.split(' ');

  for (let word.length of words);


    console.log(words);

    // return word.length <

  }

   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//    'jumped'

//   console.log(findLongestWord('Google do a roll'));
//    'Google'

//   console.log(findLongestWord('May the force be with you'));
//    'force'

// 1. Написать переменную, которая принимает строку, и делает из нее масив
// 2. Перебрать компоненты масива
// 3. Если слово самое маленькое слово - записать в переменную.