function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
john = new Person("John","Bob",28);


// try to print his bankBalance, doesn't work (private var)!
console.log(john.bankBalance);

//////////////////////
