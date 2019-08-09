// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const myClosure = () => {
	let friendlist = ["Me"];
	return function(friend) {
		friendlist.push(friend);
		return friendlist;
	}
};

const addFriend = myClosure();
console.log(addFriend("Osha"));
console.log(addFriend("Jacob"));
console.log(addFriend("Kyle"));
console.log(addFriend("Travis"));




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); 
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
  	increment: function() {
  		return ++count;
  	},
  	decrement: function() {
  		return --count;
  	}
  }
};


const newCountFact = counterFactory();

console.log(newCountFact.increment());
console.log(newCountFact.increment());
console.log(newCountFact.increment());
console.log(newCountFact.decrement());
console.log(newCountFact.decrement());

console.log(newCountFact.increment());
