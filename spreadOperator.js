// spread with normal process
// const args1 = [10, 20, 30, 40,];
// const args2 = [30, 50, 70, 90,];
// const args3 = [80, 60, 100, 85,];

// const allArgs = args1.concat(args2).concat([5]).concat(args3);
// console.log(allArgs);



//spread with ES6 Way
const args1 = [10, 20, 30, 40,];
const args2 = [30, 50, 70, 90,];
const args3 = [80, 60, 100, 85,];

const allArgs =[...args1, ...args2, ...args3];
console.log(allArgs);