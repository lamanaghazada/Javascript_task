// --- Directions
// Create a stack data structure. The stack
// should be a class with methods 'push', 'pop', and
// 'peek'. Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.elements = []; 
    }

    push(value) {
        this.elements.push(value); 
    }

    pop() {
        return this.elements.pop(); 
    }

    peek() {
        
        return this.elements.length ? this.elements[this.elements.length - 1] : undefined;
    }

    isEmpty() {
        
        return this.elements.length === 0; 
    }

    size() {
        
        return this.elements.length;
    }
}

module.exports = Stack;
