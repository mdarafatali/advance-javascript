const normalPerson = {
    firstName : "Arafat",
    lastName : "ali",
    address : {
        vill : "Gomastapur",
        Dist : {
            Thana : "Bholahat",
            gram : "Polladanga",
            post : ""
        }
    },
    salary : 17000,
    fullName : function(){
        return this.full = this.firstName + " " + this.lastName
    },

    otherCharges : function(charges){
        return this.salary = this.salary - charges;
    }
}

console.log(normalPerson.fullName());
console.log(normalPerson.otherCharges(100));
console.log(normalPerson.address.Dist.gram);