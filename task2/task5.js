// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

function checkForSpam (str) {
    let message = str.toLowerCase();
      console.log(message);

    return message.includes('sale') || message.includes('spam');
      //   console.log(message);

    }


  // console.log(checkForSpam('Latest technology news')); // false

  // console.log(checkForSpam('JavaScript weekly newsletter')); // false

  // console.log(checkForSpam('Get best sale offers now!')); // true

  console.log(checkForSpam('[SPAM] spam How to earn fast money?')); // true

//   1. Создать переменную
//   2. Записать туда строку
//   3. Разбить строку на масив слов
//   4. Сверить, есть ли искомые слова в масиве.