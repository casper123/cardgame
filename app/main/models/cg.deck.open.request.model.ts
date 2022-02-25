/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.deck.open.request.model.ts
*  @Description:    This is a model class wich represents the deck open request
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import { ValidationChain, param } from 'express-validator';

export class DeckOpenRequestModel {
  /** the id of deck to be opened */
  public deckId!: string;

  public validateRequest(): ValidationChain[] {
    return [
      param('deckId').not().isEmpty().withMessage('Type deckId missing'),
    ];
  }
}
