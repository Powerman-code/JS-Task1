var myArray = [];

// Only change code below this line
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
  console.log(myArray);
}

var i = 0;
while (i <= 5) {
  myArray.unshift(i);
  i++;
}