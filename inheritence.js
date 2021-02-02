
class Parent{
    constructor() {
        this.fatherName = "Hafiz";
    }
}


class Child extends Parent{
    constructor(name, id){
        super();
        this.name = name;
        this.id = id;
    }

    fullName(){
        return this.name + " " + this.fatherName;
    }
}


const baby1 = new Child("Arafat", 10);
const baby2 = new Child("Mofiz");

console.log(baby1.fullName());
console.log(baby2.fullName());