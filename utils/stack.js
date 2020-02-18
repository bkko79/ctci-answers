var LinkedList = require('./LinkedList');

class Stack {
    constructor (){
        this.top = null;
    }

    push(value){
        let node = new LinkedList(value);
        node.next = this.top;
        this.top  = node;
    }

    pop(){
        let pop = this.top;
        if (this.top !== null){
            this.top = this.top.next;
        }
        return pop.value;
    }

    peek(){
        return this.top !== null ? this.top.value : null;
    }

    isEmpty(){
        return this.top !== null;
    }
}

module.exports = Stack;