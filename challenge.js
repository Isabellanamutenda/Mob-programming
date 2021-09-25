class Stack {
  constructor () {
    this.arr = [];
  }
  push(number) {
    this.arr.push(number)
    // your code here
  }
  
  pop() {
    this.arr.pop()
    // your code here
  }
  
  min() {
    let min = Math.min(...this.arr)
    
    return min
    // your code here
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
