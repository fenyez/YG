


class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}



let cards = [ 
    new Card ("A", "Space"),
    new Card ("K", "Space"),
    new Card ("A", "Heart"),
    new Card ("J", "Space")
    
];


cards.forEach(card => console.log(`${card.value} ${card.suit} ` ))