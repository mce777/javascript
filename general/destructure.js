makeSound({
    // species: 'dog',
    weight: 23,
    sound: 'woof'
})

//regular es5
// function makeSound(options) {
//     console.log('The ' + options.species + ' says ' + options.sound)
// }

function makeSound( { species = 'animal', sound} ) {
    console.log('The ' + species + ' says ' + sound)
}
