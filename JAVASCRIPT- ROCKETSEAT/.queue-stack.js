//class Queue {
//    constructor() {
//        this.data = []
//    }
//
//    enqueue(item) {
//        this.data.push(item)
//        console.log(`${item} entrou na fila`)
//    }
//
//    dequeue() {
//        const item = this.data.shift()
//        console.log(`${item} saiu da fila`)
//    }
//}
//
//const queue = new Queue();
//
//queue.enqueue("lucas")
//queue.enqueue("lucas")
//queue.enqueue("lucas")
//queue.dequeue()
//queue.dequeue()
//queue.dequeue()

class Stack {
    constructor() {
        this.data = [];
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top-- 
        return poppedTop 
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] :
        undefined
    }
}

const stack = new Stack();

stack.push('Learn')
stack.push('Learning')
console.log(stack.push('Machine'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())

console.log(stack.peek())

