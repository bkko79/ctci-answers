var LinkedList = require('./linkedList');

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
    }

    add(value){
        let node = new LinkedList(value);
        if (this.front === null) {
            this.front = node;
            this.back = node;
        } else {
            this.back = node;
            this.back.next = this.back;
        }
    }

    remove(){
        let remove = this.front;
        if (this.front === this.back){
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        return remove !== null ? remove.value : null;
    }

    peek(){
        return this.front !== null ? this.front.value : null;
    }

    isEmpty(){
        return this.front === null;
    }
}

module.exports = Queue;