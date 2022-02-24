import { Prisma, PrismaClient } from '@prisma/client';
import { CardModel } from '../models/cardgame.card.model';
import { DeckCreateRequestModel } from "../models/cardgame.deck.create.request.model";
import { DeckModel } from '../models/cardgame.deck.model';
import { CardService } from './cardgame.card.service';

export class DeckService {
    
    public prisma: PrismaClient = new PrismaClient();
    public cardSerivce: CardService = new CardService();
    
    /**
    * Constructor function of RhinoAWSService class
    */
    constructor() {
    }
    
    public async createDeck(reqData: DeckCreateRequestModel): Promise<DeckModel> {

        const cards: CardModel[] = this.cardSerivce.makeDeckCards(reqData);
        let deckModel: DeckModel = { cards, shuffle: reqData.shuffled, remainingCards: cards.length};

        const result = await this.prisma.deck.create({
            data: deckModel,
        });
        console.log(JSON.stringify(result));

        return deckModel;
    }
}
