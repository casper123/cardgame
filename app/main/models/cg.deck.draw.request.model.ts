/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.deck.draw.request.model.ts
*  @Description:    This is a model class wich represents the deck draw request
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import { ValidationChain, check } from 'express-validator';

/**
* This model represents a address model.
*/
export class DeckDrawRequestModel {
  /** the id of deck */
  public deckId!: string;

  /** number of cards to draw from deck */
  public cardsToDraw!: number;

  public validateRequest(): ValidationChain[] {
    return [
      check('deckId').not().isEmpty().withMessage('deckId param missing'),
      check('cardsToDraw').not().isEmpty().withMessage('cardsToDraw param missing'),
    ];
  }
}
