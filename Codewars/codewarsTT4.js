// Your task is to make a function that can take any non-negative integer as an argument and return it with its
// digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(...n){
    +n.toString().match(/\d/g).sort((a,b)=>b>a).join('')

    };

//    if (element > 0) {
//        return 'YES'
//    }

    // n.forEach(element => {
    //     console.log(element);
    //     // if (element > 0) {
    //     //     // return 'Числа больше 0'
    //     //     console.log('ура, числа > 0');
    //     // }
    // });
//    n.sort((a, b) => {
//        if n
//    })



//   console.log(descendingOrder(0), 0);
//   console.log(descendingOrder(1), 1);
  console.log(descendingOrder(123456789));