/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.card.interface.ts
*  @Description:    This is a model class wich represents the deck in mongodb
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import * as mongoose from 'mongoose';
import { IDeck } from '../interface/cg.deck.interface';

export const DeckSchems = new mongoose.Schema({
  shuffle: { type: Boolean, required: true },
  remainingCards: { type: Number, required: true },
  cards: { type: [], required: true },
  isOpened: { type: Boolean, required: false },
});

const Deck = mongoose.model<IDeck>('Deck', DeckSchems);
export default Deck;
