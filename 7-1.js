//Create basic data structure for Blackjack

class Blackjack{
    constructor(players){
        this.deck = new Deck();
        this.players = players;
        this.host = [];
    }

    playGame(){
        try{
            let finished = false;
            this.startGame();
            while(!finished){
                let player = this.players.shift();
                let score  = player.score;
                player.decide(); // hit or not
                if(player.hit){
                    players.hands.push(drawCard());
                    score = calculateScore(player);
                }
                if (score <= 21 ){
                    player.decide(); //player need to react manually
                    if (player.hit) this.players.unshift(player);
                }
                if (this.players.isEmpty()){ // Every player stood.
                    finished = true;
                }
            }
            this.endGame();
        } catch(error){
            throw error;
        }
    }

    startGame(){
        for ( let i = 0; i < 2; i++){
            this.players.forEach((player) => {
                player.hands.push(this.deck.draw());
            });
            this.host.push(this.deck.draw());
        }
    }

    endGame(){
        //host draws his cards.
        //Final score and winner revealed // budget fixed.
    }

    calculateScore(player){
        let hands = player.showHands();
        hands.reduce((score, card) => {
            //black jack score rules in here.
            return score;
        }, 0);
    }
    
}

class Deck{
    constructor(){
        this.deck = [];
        try{
            this.newDeck();
        } catch(error){
            throw error;
        }
    }
    newDeck(){
        try{
            this.deck = [];
            let suits = ['\u2660', '\u2663', '\u2665', '\u2666'];
            let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            suits.forEach((suit) => {
                numbers.forEach((number) => {
                    let card = suit + number;
                    this.deck.push(card);
                })
            });
        } catch (error){
            throw error;
        }
        this.shuffle();
        return true;
    }

    shuffle(){
        this.deck.sort(() => Math.random() > 0.5 ? 1 : -1);
        return true;
    }

    draw(){
        let card = this.deck.shift();
        return card;
    }
}

class Player{
    constructor(name, budget){
        this.name = name;
        this.budget = budget;
        this.score = 0;
        this.hands = [];
        this.hit = true;
    }

    decide(){
        let hit; //Manual operation from front-end will be stored here
        if (hit){
            this.hit = true;
        } else {
            this.fit = false;
        }
        return this.hit;
    }

    reset(){
        this.hands = [];
        this.score = [];
        this.hit = true;
    }
}

var players = [
    new Player("john", "10000"),
    new Player("Winston", "9500"),
    new Player("Kang", "7000")
];

var Game = new Blackjack(players);

Game.startGame();

console.log(Game.players);