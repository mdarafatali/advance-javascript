//Normal string Join
// const firstName = "MD Arafat"
// const lastName = "Ali Asgar"

// const fullName = firstName + " " + lastName;
// console.log(fullName);



//string Join in ES6

function stringJoin(firstName, lastName){
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}

const fullName2 = `
The name of our country is Bangladesh ${100 * 20}
It is very Beautiful than any other Country
So that I love My Country Very Much.
`
const displayName = stringJoin("Hanif", "Paribahan")
console.log(displayName);
console.log(fullName2);


