if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this // current object ki taraf point karta hai.

        for(let i=0; i <originalArr.length; i++){
            userFn(originalArr[i], i);
            }
        };
    }

    if(!Array.prototype.myMap){
        Array.prototype.myMap = function(userFn){
            const result = []

            for(let i =0; i < this.length; i++){
                const value = userFn(this[i], i);
                result.push(value);
            }
            return result;
        };
    }

    if(!Array.prototype.myFilter){
        Array.prototype.myFilter = function(userFn){
           const result = []

           for(let i =0; i < this.length; i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
           }


           return result;
        };
    }

const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable.

// Real Signature ko samjho - No return, function input, value, index
// call my fn for every value


const ret = arr.myForEach(function(value, index){
    console.log(` My For Each Value at Index ${index} is ${value}`);
});

console.log(`Ret is`, ret);


// Signature  .map
// Return? - New Array, Each ele Iterate, userFn

const n = arr.map(function(value, index){
    return value * 2;
});

const n2 = arr.myMap((e) => e * 3);

console.log(n);
console.log(arr);
console.log(n2);

// Filter
// Signature: Return - new Array | input: userFn,
// agar user ka function True return Karta hai toh current value ko new array mai include kar leta hai

const n3 = arr.filter((e) => e % 3 == 0);
console.log(n3);

