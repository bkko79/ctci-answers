//Create stack an list that contains three stacks 

class threeStacks {
    constructor() {
        this.container = [];   //stack array
        this.secondStart = 0;  //second: Array.splice(); starting index
        this.secondEnd = 0;    //second: Array.splice(); ending index; third's starting index;
    }
    //Methods
    isEmpty(value){
        if ( value == 'first'){
            return this.secondEnd === 0;
        } else if ( value == 'second'){
            return this.secondStart === this.secondEnd;
        } else if ( value == 'third'){
            return this.container.length === this.secondEnd;
        } else {
            return false;
        }
    }

    pushFirst(value){
        this.container.unshift(value);
        this.secondStart++; //second stack's starting index +1
        this.secondEnd++;   //second stack's ending index +1
    }
    pushSecond(value){
        this.container.splice(this.secondStart, 0, value);
        this.secondEnd++;   //second stack's ending index +1
    }
    pushThird(value){
        this.container.splice(this.secondEnd, 0, value);
    }

    popFirst(){
        if (this.isEmpty('first')){
            return undefined;
        }
        let result = this.container.shift();
        if (this.secondStart > 0){
            this.secondStart--;
            this.secondEnd--;
        }
        return result;
    }
    popSecond(){
        if (this.isEmpty('second')){
            return undefined;
        }
        let result = this.container[this.secondStart]
        this.container.splice(this.secondStart, 1);
        if (this.secondStart < this.secondEnd){
            this.secondEnd--;
        }
        return result;
    }
    popThird(){
        if(this.isEmpty('third')){
            return undefined;
        }
        let result = this.container[this.secondEnd]
        this.container.splice(this.secondEnd, 1);
        return result;
    }

    peekFirst(){
        return this.isEmpty('first') ? null : this.container[0];
    }
    peekSecond(){
        return this.isEmpty('second') ? null : this.container[this.secondStart];
    }
    peekThird(){
        return this.isEmpty('third') ? null : this.container[this.secondEnd];
    }
};

/* TEST */
var t = new threeStacks;
t.pushFirst('1a');
t.pushFirst('1b');
t.pushFirst('1c');
t.pushSecond('2a');
t.pushSecond('2b');
t.pushSecond('2c');
t.pushThird('3a');
t.pushThird('3b');
t.pushThird('3c');

console.log(t.container, t.secondStart, t.secondEnd);

var a1 = t.popFirst();
var a2 = t.popSecond();
var a3 = t.popThird();

var peek1 = t.peekFirst();
var peek2 = t.peekSecond();
var peek3 = t.peekThird();

console.log(t.container, t.secondStart, t.secondEnd);
console.log(a1,a2,a3);
console.log(peek1,peek2,peek3);

var c1 = t.popFirst();
var c2 = t.popSecond();
var c3 = t.popThird();

console.log(c1,c2,c3);

var d1 = t.popFirst();
var d2 = t.popSecond();
var d3 = t.popThird();

console.log(d1,d2,d3);

var isEmptyb1 = t.isEmpty('first');
var isEmptyb2 = t.isEmpty('second');
var isEmptyb3 = t.isEmpty('third');

console.log(isEmptyb1,isEmptyb2,isEmptyb3);