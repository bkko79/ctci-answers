// sort stack 

class stack{
    constructor(value){
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop(){
        if ( this.stack.length !== 0){
            return this.stack.pop();
        } else {
            return undefined;
        }
    }
    peek(){
        if ( this.stack.length !== 0){
            return this.stack[this.stack.length-1];
        } else {
            return undefined;
        }
    }
    isEmpty(){
        return this.stack.length == 0;
    }
    sort(){
        let sort = [];
        while (this.stack.length !== 0){
            console.log(this.stack.length);
            let current = this.stack.pop();
            let i = 0;
            if ( sort.length == 0){
                sort.push(current);
            } else {
                let insertion = false;
                while (!insertion){
                    if (current > sort[i]){
                        sort.splice(i+1, 0, current);
                        insertion = true;
                    } else if ( sort[i] == undefined){
                        sort.unshift(current);
                        insertion = true;
                    }
                    i++;
                }
            }
        }
        return sort;
    }
}

/* TEST */

var t = new stack();
t.push(1);
t.push(3);
t.push(2);
t.push(5);
t.push(4);
console.log(t);
console.log(t.sort());