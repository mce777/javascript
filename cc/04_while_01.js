// while loops
var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}

////////////// within a function

var x = 1

var loop = function(){
	while(x <= 3){
		console.log("I'm looping!");
		x++;
	}
};

loop();

////////////// do/while

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

////////////// another do/while

y = 1;
do {
    console.log("do " + y);
    y+=1;
} while(y<5);
