// const object1 = [
//     {name : "arafat", id : 10},
//     {name : "Mofiz", id : 20},
//     {name : "Hafiz", id : 30}
// ];

// const result = [];

// for (let i = 0; i < object1.length; i++) {
//     const element = object1[i];
//     result1 = element.name;
//     result.push(result1);

// }
// console.log(result);

const students = [
    { name: "arafat", id: 10 },
    { name: "Mofiz", id: 20 },
    { name: "Hafiz", id: 30 }
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id)
const filterIds = students.filter(s => s.id > 10);
const findIds = students.find( s => s.id > 10);


console.log(ids);
console.log(names);
console.log(filterIds);
console.log(findIds);

