/* eslint-disable import/no-unresolved */

/*
 *  @Project:        CardGame
 *  @File:           cg.deck.service.ts
 *  @Description:    This service has functions related to Deck of cards.
 *  @Created:        24 Feb 2022
 *  @CreatedBy:      Abdul Wahab
 */

import Deck from '../models/cg.deck.model';
import { ICard } from '../interface/cg.card.interface';
import { IDeck } from '../interface/cg.deck.interface';
import { CardModel } from '../models/cg.card.model';
import { DeckCreateRequestModel } from '../models/cg.deck.create.request.model';
import { DeckDrawRequestModel } from '../models/cg.deck.draw.request.model';
import CardService from './cg.card.service';

class DeckService {
  /** initialize the card service class which will return set of cards */
  public cardSerivce: CardService = new CardService();

  /**
   * This method creates a new deck of cards
   * @param {reqData}: DeckCreateRequestModel
   * @returns {Promise<IDeck>}
   */
  public async createDeck(reqData: DeckCreateRequestModel): Promise<IDeck> {
    try {
      const cards: CardModel[] = this.cardSerivce.makeDeckCards(reqData);
      const deck: IDeck = new Deck({
        cards,
        shuffle: reqData.shuffle,
        remainingCards: cards.length,
        isOpened: false,
      });

      await deck.save();
      return deck;
    } catch (error) {
      return error;
    }
  }

  /**
   * This method opens deck of cards by deckId
   * @param {deckId}: string
   * @returns {Promise<IDeck | null>}
   */
  public async openDeck(deckId: string): Promise<IDeck | null> {
    try {
      const deck: IDeck = await Deck.findByIdAndUpdate(deckId, { isOpened: true });
      return deck;
    } catch (error) {
      return error;
    }
  }

  /**
   * This method draws the (X) number cards from opened deck
   * @param {reqData}: DeckDrawRequestModel
   * @returns Promise<ICard[] | {}>
   */
  public async drawDeckCard(reqData: DeckDrawRequestModel): Promise<ICard[] | {}> {
    try {
      const cards: Array<ICard> = [];
      const deckCards: ICard[] = [];

      const deck: IDeck = await Deck.findById(reqData.deckId);

      if (deck === null) {
        return { error: { message: 'Invalid deckId. Deck not found for provided deckId' } };
      }

      if (!deck.isOpened) {
        return { error: { message: 'This deck is not opened yet! Please open up the deck first' } };
      }

      if (deck.remainingCards < reqData.cardsToDraw) {
        return { error: { message: `This deck of cards has ${deck.remainingCards} remaining. You asked to draw ${reqData.cardsToDraw} cards.` } };
      }

      deck.cards.forEach((card, index) => {
        if (index < reqData.cardsToDraw) {
          cards.push(card);
        } else {
          deckCards.push(card);
        }
      });

      await Deck.findByIdAndUpdate(
        reqData.deckId,
        { cards: deckCards, remainingCards: deckCards.length },
      );
      return cards;
    } catch (error) {
      return error;
    }
  }
}

export default DeckService;
