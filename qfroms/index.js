// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(record) {
        
        this.stack1.push(record);
    }

    remove() {
        // If stack2 is empty, move all elements from stack1 to stack2
        if (!this.stack2.peek()) {
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        
        return this.stack2.pop();
    }

    peek() {
        // If stack2 is empty, transfer elements from stack1 to stack2
        if (!this.stack2.peek()) {
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        
        return this.stack2.peek();
    }
}

module.exports = Queue;

