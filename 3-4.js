// Create queue class with 2 stacks.

class queueInStack{
    constructor(){
        this.addStack = [];
        this.rmStack = [];
    }

    add(value){
        this.addStack.push(value);
    }

    remove(){
        if (!this.rmStack.length == 0){  
            return this.rmStack.pop();
        } else {
            while(this.addStack.length !== 0){ // lazy stack
                this.rmStack.push(this.addStack.pop());
            }
            return this.rmStack.pop();
        }
    }

    peek(){
        if (!this.rmStack.length == 0){
            return this.rmStack[this.rmStack.length-1];
        } else {
            return this.addStack[0];
        }
    }

    isEmpty(){
        return this.front.isEmpty() && this.back.isEmpty();
    }
}


/* TEST */
var m = new queueInStack();

m.add('a');
m.add('b');
m.add('c');
m.add('d');
m.add('e');
console.log(m);
console.log(m.peek());
m.remove();
m.remove();
m.remove();
m.add('f');
m.add('g');
m.add('h');
console.log(m);
console.log(m.peek());
m.remove();
m.remove();
m.remove();
console.log(m);
console.log(m.peek());