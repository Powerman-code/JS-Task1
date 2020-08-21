function countPositivesSumNegatives(input) {
    // console.log(input);
    var numbers;
    var biggestPositiveNumber = input[0];
    var summOfNegativeNumbers = 0;
    // console.log(summOfNegativeNumbers);

    if (input === undefined || isNaN(input)) {
      numbers = [];
    }
    // console.log(typeof(input[0]));
    console.log(numbers);

    for (var i = 0; i < input.length; i += 1) {
    if (input[i] > biggestPositiveNumber) {
      biggestPositiveNumber = input[i];
    //   console.log(biggestPositiveNumber);

    } else if (input[i] < 0) {  /*проверить тут, подставить    */
      summOfNegativeNumbers += input[i];
    //   console.log(biggestPositiveNumber);

        // console.log(numbers);
    }
    numbers.push(biggestPositiveNumber);
    numbers.push(summOfNegativeNumbers);
    numbers = [biggestPositiveNumber, summOfNegativeNumbers];
    // console.log(numbers);
    // console.log(biggestPositiveNumber);
    // console.log(summOfNegativeNumbers);
    }
    return numbers;
}

    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    console.log(countPositivesSumNegatives(testData));
