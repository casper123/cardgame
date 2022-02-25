/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.deck.interface.ts
*  @Description:    This is a interface class wich represents the deck
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import * as mongoose from 'mongoose';
import { ICard } from './cg.card.interface';

export interface IDeck extends mongoose.Document {
  shuffle: boolean;
  remainingCards: number;
  cards: ICard[];
  isOpened: boolean;
}
