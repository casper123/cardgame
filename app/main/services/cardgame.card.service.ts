
import { CardModel } from "../models/cardgame.card.model";
import { DeckCreateRequestModel } from "../models/cardgame.deck.create.request.model";

export class CardService {
    
    /**
    * Constructor function of RhinoAWSService class
    */
    constructor() {
    }
    
    public makeDeckCards(reqData: DeckCreateRequestModel): CardModel[] {

        let cards: CardModel[] = [];

        const suits: string[] = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const cardsSeries: string[] = ["Ace", "2", "3", "4", "5", "6", "7,", "8", "9", "10", "Jack", "Queen", "King"];
        const shortSeries: string[] = ["2", "3", "4", "5", "6"];
        suits.forEach((suit) => {

            cardsSeries.forEach((card) => {
                if (reqData.type === "SHORT" && shortSeries.indexOf(card) >= 0) {
                    return;
                }
                cards.push({
                    suit: suit,
                    value: card,
                    code: `${card.substring(0,1)}${suit.substring(0,1)}`,
                });
            })
            
        });

        return cards;
        
    }
}
