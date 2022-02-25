/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.card.interface.ts
*  @Description:    This is a interface class wich represents the card of deck
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import * as mongoose from 'mongoose';

export interface ICard extends mongoose.Document {
  value: string;
  suit: string;
  code: string;
}
