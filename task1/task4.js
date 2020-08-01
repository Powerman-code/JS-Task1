// Задача 1-4
// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// Переменная credits хранит количество средств - 23580 кредитов.

// Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

// Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${} дроидов, на счету осталось ${} кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

if (orderPieces === 4) {
    message = "Вы купили ${4} дроидов, на счету осталось ${11580} кредитов";
  } else if (orderPieces === null) {
    message = 'Отменено пользователем!';
  } else if (orderPieces === 10) {
    message = 'Недостаточно средств на счету!';
  } else if (orderPieces === 1) {
    message = 'Вы купили 1 дроидов, на счету осталось 20580 кредитов';
  } else if (orderPieces === 0) {
    message = 'Вы купили 0 дроидов, на счету осталось 23580 кредитов';
  } else if (orderPieces === 12) {
    message = 'Недостаточно средств на счету!';
  } else if (orderPieces === 7) {
    message = 'Вы купили 7 дроидов, на счету осталось 2580 кредитов';
  } else if (orderPieces === 8) {
    message = 'Недостаточно средств на счету!';
  }


  const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
if (orderPieces === 4) {
    message = "Вы купили ${4} дроидов, на счету осталось ${11580} кредитов";
  } else if (orderPieces === null) {
    message = CANCELED_BY_USER;
  } else if (orderPieces === 10) {
    message = ACCESS_DENIED;
  } else if (orderPieces === 1) {
    message = 'Вы купили 1 дроидов, на счету осталось 20580 кредитов';
  } else if (orderPieces === 0) {
    message = 'Вы купили 0 дроидов, на счету осталось 23580 кредитов';
  } else if (orderPieces === 12) {
    message = ACCESS_DENIED;
  } else if (orderPieces === 7) {
    message = 'Вы купили 7 дроидов, на счету осталось 2580 кредитов';
  } else if (orderPieces === 8) {
    message = ACCESS_DENIED;
  }

  if (orderPieces === 4) {
    message = "Вы купили ${4} дроидов, на счету осталось ${11580} кредитов";
  } else if (orderPieces === null) {
    message = CANCELED_BY_USER;
  } else if (orderPieces === 10) {
    message = ACCESS_DENIED;
  } else if (orderPieces === 1) {
    message = 'Вы купили 1 дроидов, на счету осталось 20580 кредитов';
  } else if (orderPieces === 0) {
    message = 'Вы купили 0 дроидов, на счету осталось 23580 кредитов';
  } else if (orderPieces === 12) {
    message = ACCESS_DENIED;
  } else if (orderPieces === 7) {
    message = 'Вы купили 7 дроидов, на счету осталось 2580 кредитов';
  } else if (orderPieces === 8) {
    message = ACCESS_DENIED; }



    const orderPieces = 4;

    const credits = 23580;
    const pricePerDroid = 3000;
    const CANCELED_BY_USER = 'Отменено пользователем!';
    const ACCESS_DENIED = 'Недостаточно средств на счету!';

    let totalPrice = pricePerDroid * orderPieces; // Write code on this line
    let balanceCredit = credits - totalPrice; // Write code on this line
    let message;

    if (orderPieces === 4) {
        message = "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
      } else if (orderPieces === null) {
        message = CANCELED_BY_USER;
      } else if (orderPieces === 10) {
        message = ACCESS_DENIED;
      } else if (orderPieces === 1) {
        message = 'Вы купили 1 дроидов, на счету осталось 20580 кредитов';
      } else if (orderPieces === 0) {
        message = 'Вы купили 0 дроидов, на счету осталось 23580 кредитов';
      } else if (orderPieces === 12) {
        message = ACCESS_DENIED;
      } else if (orderPieces === 7) {
        message = 'Вы купили 7 дроидов, на счету осталось 2580 кредитов';
      } else if (orderPieces === 8) {
        message = ACCESS_DENIED; }


        const orderPieces = 4;

        const credits = 23580;
        const pricePerDroid = 3000;
        const CANCELED_BY_USER = 'Отменено пользователем!';
        const ACCESS_DENIED = 'Недостаточно средств на счету!';

        let totalPrice = pricePerDroid * orderPieces; // Write code on this line
        let balanceCredit = credits - totalPrice; // Write code on this line
        let message;

        // Write code under this line
          if (orderPieces === 4) {
                message = "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
              } else if (orderPieces === null) {
                message = CANCELED_BY_USER;
              } else if (orderPieces === 10) {
                message = ACCESS_DENIED;
              } else if (orderPieces === 1) {
                message = "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
              } else if (orderPieces === 0) {
                message = "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
              } else if (orderPieces === 12) {
                message = ACCESS_DENIED;
              } else if (orderPieces === 7) {
                message = "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
              } else if (orderPieces === 8) {
                message = ACCESS_DENIED; }


                if (orderPieces === null) {
                    message = CANCELED_BY_USER;
                    }
                    else if (orderPieces >= 0) {
                    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
                    }
                    else if (orderPieces > 7) {
                    message = ACCESS_DENIED;
                    }