// constructor
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
// could include this in the constructor, but here we just have it for 'buddy'
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Woofy");
};

snoopy.bark();
