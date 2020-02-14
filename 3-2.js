// stack min

//*TODO: How to O(logN) -> O(1)

class stackMin {
    constructor(){
        this.container = [];
        this.minStack  = [];
        this.min = null;
    }
    push(value){
        /* minStack operation */
        if (value < this.min || this.min === null){
            this.minStack.unshift(value); // pushes bigger one to last
            this.min = value;             // smaller one to first
        } else if (value >= this.min ){
            let i = 0;
            let insertion = false;
            while (!insertion){
                if ( value < this.minStack[i]){
                    this.minStack.splice(i, 0, value); // pushes in between smaller and bigger values
                    insertion = true;                  // stops loop
                } else if ( this.minStack[i] == undefined ){
                    this.minStack.push(value);         // biggest value goes last
                    insertion = true;                  // stops loop
                }
                i++;
            }
        }
        this.container.unshift(value);
    }

    pop(){
        let value = this.container.shift();
        if (value == this.min ){
            if (this.min == this.minStack[0]){  //First minStack is ordered list
                this.minStack.shift();
            }
            this.min = this.minStack.shift();
        } else {
            let i = 0;
            while (this.minStack[i]){
                if (value == this.minStack[i]){
                    this.minStack.splice(i, 1); //remove same value from minStack
                }
                i++;
            }
        }
        return value;
    }

    peek(){
        return this.container[0];
    }

    getMin(){
        return this.min;
    }
};

/* TEST */

var t = new stackMin;
t.push(2);
t.push(7);
t.push(3);
t.push(4);
t.push(8);
t.push(9);
t.push(1);
console.log(t);
t.pop();t.pop();t.pop();
console.log(t);
console.log(t.getMin());