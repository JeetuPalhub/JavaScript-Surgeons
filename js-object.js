const obj1 = {
    fname: 'Jeetu',
    lname: 'Pal',
    getFullname: function() {
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`
        return `${this.fname} ${this.lname}`;
    },
};

const obj2 = {
    fname: 'Aditi',
    lname: 'Shukla',
    getFullname: function() {
        return `${this.fname} ${this.lname}`;
    },
};

// DRY - do not repeat yourself .


console.log(obj1.getFullname());
console.log(obj2.getFullname());

