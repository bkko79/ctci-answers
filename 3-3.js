class setOfStacks {
    constructor(capacity){
        this.capacity = capacity;
        this.stackSet = [];
    }

    push(value){
        if (this.stackSet.length ===0  ||
            this.stackSet[this.stackSet.length-1].length === this.capacity) {
                let newStack = [];
                newStack.push(value);
                this.stackSet.push(newStack);
            } else {
                this.stackSet[this.stackSet.length-1].push(value);
            }
    };

    pop(){
        if (this.stackSet[this.stackSet.length-1].length !== 0){
            return this.stackSet[this.stackSet.length-1].pop();
        } else {
            this.stackSet.filter(function() {return true; });
            return this.stackSet[this.stackSet.length-1].pop();
        }
    }

    popAt(value){
        if (this.stackSet[value-1]){
            return this.stackSet[value-1].pop();
        } else {
            return false;
        }
    }
}

/* TEST */

var stack = new setOfStacks(3);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack);

console.log(stack.popAt(1));
console.log(stack.popAt(2));

console.log(stack);