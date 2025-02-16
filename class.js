class Person {
    constructor(fname, lname) {
this.fname= fname;
this.lname = lname;

this.isActive = false;

console.log(this.getFullname());
    }

    getFullname() {
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person ('Jeetu', 'Pal');
const p2 = new Person ('Aditi', 'Shukla');

console.log(p1.getFullname());
console.log(p2.getFullname());
p1.isActive

const something = (x , y) => {
    return x + y 
}

arr.map((value) => value * 2)

arr.map(function(value) {
    return value * 2
})
