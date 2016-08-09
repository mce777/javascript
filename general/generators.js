// via learncodeacademy
// They're pausable functions, pausable iterable functions, to be more precise
// They're defined with the *
// every time you yield a value, the function pauses until .next(modifiedYieldValue) is called

var myGen = function*() {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three);
};

console.log(gen.next()); //{value:1, done: false}
console.log(gen.next(1)); //{value:2, done: false}
console.log(gen.next(2)); //{value:3, done: false}
console.log(gen.next(3)); //{value:undefined, done: true}



function smartCode(generator) { //give me a generator function
  var gen = generator();//start up the generator
  var yieldedVal = gen.next().value;//get the first yielded value
  if(yieldedVal.then) { //is it a promise?
    //it's a promise!!!
    yieldedVal.then(gen.next);//wait for it to resolve, then pass the resolved value back in
  }
}

// or like this

function smartCode(generator) {
  return function() {
    var gen = generator.apply(this,arguments);

    function handleNext(yielded) {
      if (yielded.done) return yielded.value; //return final return value

      if (yielded.value.then) {
        return yielded.value.then(function(res) {
          return handleNext(gen.next(res));
        }, function(err) {
          return handleNext(gen.throw(err));
        });
      } else {
        return handleNext(gen.next(yielded.value));
      }
    }
  }
}
