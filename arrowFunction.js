//arrow function for no argument

// const return5 = () =>5;

// const result = (return5);
// console.log(result);



//arrow function for single Argument
// const doubleIt = num => num*2;
// const result = doubleIt(10);
// console.log(result);


//arrow function for multiple argument
// const add = (x, y) => x + y;
// const result = add (10, 20);
// console.log(result);

// Arrow Function with Multiple Parameter

const add = (x, y) => {
    const result1 = x + y;
    const result2 = x - y;
    const result3 = result1 * result2;

    return result3;
}

const finalResult = add (50, 20);
console.log(finalResult);