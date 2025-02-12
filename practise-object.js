// Problem: Create an object represnting a type of tea with properties for name, type, and caffeinbe content.
const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "low",
}

// Problem: Access and print the name and type properties of the tea objec.
console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin to the tea object.
teas.origin = "Assam"

// Problem: Change the caffine level of the tea object to "Medium".
teas.caffine = "Medium"

// Problem: Remove the type property from the tea object.
delete teas.type

// Problem: Check if the tea object has a property origin.
console.log("origin" in teas);

// Problem: Use a for...in loop to print all properties of tea object.
for(let key in teas){
    console.log(key + ": " + teas[key]);
}

// Problem: Create a nested object representing different types of teas and their properties.
const myTeas = {
    greentea: {
        name: "Green Tea",
        cups: {
            one: "1",
            two: "2",
        }
    },
    blackTea: {
        name: "Black tea"
    }
}

// Problem: Create a copy of the tea object.
const teaCopy = {...teas}
