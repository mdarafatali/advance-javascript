
//square Elements by using Loop
// const numbers = [10, 20, 30, 40, 50, 60, 70];

// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const square = element * element;
//     result.push(square);   
// }

// console.log(result);



//square elements by using MAP and function

// const numbers = [10, 20, 30, 40, 50, 60, 70];

// const result = numbers.map(function(elements){

//     return  elements * elements;

// })

// console.log(result);


//square elements by using map and Arrow Function


const numbers = [10, 20, 30, 40, 50, 60, 70];
const result = numbers.map(elements => elements*elements);
console.log(result);

const numbers2 = [1, 2, 3, 4, 5, 6, 7];

const result2 = numbers2.map(x => x > 5);
console.log(result2);


const numbers3 = [1, 2, 3, 4, 5, 6, 7];
const result3 = numbers3.find(x => x>3);
console.log(result3);


