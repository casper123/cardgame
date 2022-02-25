/* eslint-disable import/no-unresolved */

/*
*  @Project:        CardGame
*  @File:           cg.card.service.ts
*  @Description:    This service has functions related deck of cards.
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import { CardModel } from '../models/cg.card.model';
import { DeckCreateRequestModel } from '../models/cg.deck.create.request.model';

class CardService {
  /**
   * This method an array of cards for new deck
   * @param {reqData}: DeckCreateRequestModel
   * @returns {CardModel[]}
   */
  public makeDeckCards(reqData: DeckCreateRequestModel): CardModel[] {
    /** array of cards which will be passed to deck */
    const cards: CardModel[] = [];

    const suits: string[] = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const cardsSeries: string[] = ['Ace', '2', '3', '4', '5', '6', '7,', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const shortSeries: string[] = ['2', '3', '4', '5', '6'];
    suits.forEach((suit) => {
      cardsSeries.forEach((card) => {
        if (reqData.type === 'SHORT' && shortSeries.indexOf(card) >= 0) {
          return;
        }
        cards.push({
          suit,
          value: card,
          code: `${card.substring(0, 1)}${suit.substring(0, 1)}`,
        });
      });
    });

    if (reqData.shuffle) {
      return this.shuffle(cards);
    }
    return cards;
  }

  /**
   * This method shuffles the array of cards in random order
   * @param {cards}: CardModel[]
   * @returns {CardModel[]}
   */
  public shuffle(cards: CardModel[]): CardModel[] {
    const shuffledCards:CardModel[] = cards.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffledCards;
  }
}

export default CardService;
