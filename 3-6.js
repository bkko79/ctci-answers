class animalShelter {
    constructor(){
        this.dogQueue = [];
        this.catQueue = [];
        this.counter = 0;
    }
    push(value){
        if (value.type == 'dog'){
            let dog = {
                "name": value.name,
                "timestamp": this.counter
            }
            this.dogQueue.push(dog);
            this.counter++;
        } else if (value.type === 'cat'){
            let cat = {
                "name": value.name,
                "timestamp": this.counter
            }
            this.catQueue.push(cat);
            this.counter++;
        } else {
            return false;
        }
    }
    pop(value){
        if (value == 'dog'){
            return this.dogQueue.shift();
        } else if (value == 'cat'){
            return this.catQueue.shift();
        } else if (value == 'any'){
            if (this.dogQueue[0].timestamp < this.catQueue[0].timestamp){
                return this.dogQueue.shift();
            } else {
                return this.catQueue.shift();
            }
        } else {
            return false;
        }
    }
}

var t = new animalShelter();
t.push({"type": "dog", "name": "jolly"});
t.push({"type": "cat", "name": "Benny"});
t.push({"type": "dog", "name": "Sam"});
t.push({"type": "cat", "name": "Manual"});
t.push({"type": "dog", "name": "John"});
t.push({"type": "cat", "name": "Sonny"});
console.log(t);
console.log(t.pop("cat"));
console.log(t.pop("dog"));
console.log(t.pop("any"));
console.log(t);