var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
]

// will only return what you filter
var isDog = function(theanimal) {
    return theanimal.species === 'dog';
}

var dogs = animals.filter(isDog);

console.log(dogs);

