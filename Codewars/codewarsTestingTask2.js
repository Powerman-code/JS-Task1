function countPositivesSumNegatives(input) {
    // console.log(input);
    var numbers = input;

    var biggestPositiveNumber = [];
    var summOfNegativeNumbers = 0;
    if (!input || input.length === 0) return []

    for (var i = 0; i < numbers.length; i += 1) {
       Math.sign(numbers[i]) === 1? biggestPositiveNumber.push(numbers[i]) : summOfNegativeNumbers += numbers[i];

    }
    // console.log(biggestPositiveNumber);
    //    console.log(summOfNegativeNumbers);
    return [biggestPositiveNumber.length, summOfNegativeNumbers];
}

    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    console.log(countPositivesSumNegatives(testData));

    // if (numbers[i] > biggestPositiveNumber) {
    //       biggestPositiveNumber = numbers[i];
    //       console.log(biggestPositiveNumber);
    //     }

    // console.log(Math.sign(numbers[i]));