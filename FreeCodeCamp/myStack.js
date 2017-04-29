/* Stacks */

// functions: push, pop, peek, length
'use strict';

const letters = [];
const word = 'freeCodeCamp';
let rword = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome.');
}

// Creates a stack
const Stack = function() {
  this.count = 0;
  this.storage = {};
  // Adds a value onto the end of the stack
  this.push = value => {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes and returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.size = () => {
    return this.count;
  }
  // Return the value at the end of the stack
  this.peek = () => {
    return this.storage[this.count - 1];
  }
}

/* Test myStack */
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
