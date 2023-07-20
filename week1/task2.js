let numsArray = [15, 12, 99, 36, 19];
console.log(numsArray);

numsArray.push(20)
console.log(numsArray);

numsArray.unshift(105)
console.log(numsArray);

numsArray.splice(2, 0, 17)
console.log(numsArray);

numsArray.pop();
console.log(numsArray);

numsArray.splice(1, 1);
console.log(numsArray);

numsArray[4] = 100;
console.log(numsArray);

numsArray = numsArray.map(num => num * 2);
console.log(numsArray);

// The first parameter of reduce is a callback function that takes two
// arguments: the accumulator and the currentValue.

// In each iteration, the callback function adds the currentValue to the
// accumulator.

// The second parameter of reduce is the initial value of the accumulator,
// which is set to 0 in this case.

let arrayTotal = numsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(arrayTotal);

