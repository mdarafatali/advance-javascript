const employee1 = {
    firstName : "Arafat",
    lastName : "Ali",
    age : 26,
    getFullName : function () {
        return this.fullName = this.firstName + " " + this.lastName;
    },
    salary : 15000,
    getTax : function(amount) {
        const totalAfterTax = this.salary - amount;
        return (totalAfterTax);
    }
}

const employee2 = {
    firstName : "Mofiz",
    lastName : "Uddin",
    salary : 8000
}

const employee1FullName = employee1.getFullName()
const employee1TotalSalary = employee1.getTax(200)
console.log("Employee Full Name is : ",employee1FullName);
console.log("Employee Salary is : ", employee1TotalSalary);

console.log("---------2nd Employee Details Here -------")

const employee2fullName = employee1.getFullName.bind(employee2);
const employee2TotalSalary = employee1.getTax.bind(employee2);

console.log(employee2fullName());
console.log(employee2TotalSalary(100));

