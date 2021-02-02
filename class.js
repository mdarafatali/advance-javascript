class Student{
    constructor (sId, sName, sRoll){
        this.id = sId;
        this.name = sName;
        this.roll = sRoll;
    }
    
}

const student1 = new Student(10, "Arafat", 20);
const student2 = new Student(20, "Mofiz", 100);
const student3 = new Student(40, "Hafiz", 320);
console.log(student1.name, student1.id);
console.log(student2.name, student2.id);
console.log(student3.name, student3.id);
