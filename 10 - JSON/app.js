const product = {
    name: "Meat",
    price: 123.45,
    quantity: 321
};
console.log(product);

const productJSON = JSON.stringify(product);
console.log(productJSON);

const personJSON = `{"name": "Ion", "age": 123, "salary": 1234}`;
console.log(personJSON);
const person = JSON.parse(personJSON);
console.log(person);

const cars = [
    {
        name: "Honda",
        price: 10500
    },
    {
        name: "Volvo",
        price: 39900
    }
];

console.log(cars);
console.log(JSON.stringify(cars));