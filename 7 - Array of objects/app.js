const student = {
    name: 'Ion Ciobanu',
    age: 12,
    salary: 4879,
    address: 'Moldova'
};

console.log(student);
console.log(student.address);

const students = [
    {
        name: 'Ion Ciobanu',
        age: 12,
        salary: 4879,
        address: 'Moldova'
    },
    {
        name: 'Mihai Eminescu',
        age: 32,
        salary: 4879,
        address: 'Moldova'
    }
];

const studentsNames = students.map(student => student.name);
console.log(studentsNames);

students.forEach(student => {
    console.log(student.name);
})