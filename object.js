const person = {
    x: 22,
    firstName:  'Jeetu',
    lastName:    'Pal',
    hobbies:     ['Gym','Coding'],
    isMarried:    false,
    hasGf:        true,
    hadCrush:     null,
    getFullName:  function(){
        return 'Jeetu Pal'
    },
    address:{
        houseNumber: 1,
        street: 1,
        countryCode: 'IN',
        state: 'UP'
    }
}

console.log(person.address)

const remote ={
    color: 'black',
    brand: 'XYZ',
    dimension: {height: 1, width: 1},
    turnOff: function(){
    },
    volumeUp: function(){

    }
}

console.log(remote.color)