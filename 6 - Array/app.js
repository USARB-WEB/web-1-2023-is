let numbers = [1, 3, 5, 7, 9];
let squaredNumbers = [];

//hardcode
//squaredNumbers[0] = numbers[0] ** 2;
//squaredNumbers[1] = numbers[1] ** 2;

// classic method
/*
for (let index = 0; index < numbers.length; index++) {
    squaredNumbers[index] = numbers[index] ** 2;
}

console.log(numbers);
console.log(squaredNumbers);
*/

// Cool method
squaredNumbers = numbers.map(number => number ** 2);

console.log(numbers);
console.log(squaredNumbers);


console.clear();

let randomNumbers = [-4, 1, 0, 34, 23, 1, 8];

for (let index = 0; index < randomNumbers.length; index++) {
    if(randomNumbers[index] > 0 && randomNumbers[index] % 2 ===0){
        console.log(randomNumbers[index]);
    }    
}

console.log(randomNumbers.filter(number => number > 0 && number % 2 === 0));


console.clear();
let positiveNumbers = [1, 56, 78, 4, 2];
let sum = 0;
for (let index = 0; index < positiveNumbers.length; index++) {
    sum += positiveNumbers[index];   
}

console.log(sum);

console.log(positiveNumbers.reduce((accumulatorValue, newValue) => accumulatorValue + newValue));

console.clear();


const message = "Hello, I am a JavaScript message";
console.log(message.split(' '));
console.log(message.split(''));

console.clear();
const persons = ["Ion", "Maria", "Mihai", "Ana", "Undefined"];
console.log(persons);
persons.splice(2 - 1, 1);
console.log(persons);
console.log(persons.slice(1, -1));
