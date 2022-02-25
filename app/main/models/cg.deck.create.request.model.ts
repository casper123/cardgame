/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

/*
*  @Project:        CardGame
*  @File:           cg.deck.create.request.model.ts
*  @Description:    This is a model class wich represents the create deck request
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import { check, CustomValidator, ValidationChain } from 'express-validator';

/**
 * This model represents a address model.
 */
export class DeckCreateRequestModel {
  /** type of deck (FULL/SHORT) */
  public type!: string;

  /** is it a shuffled deck */
  public shuffle!: boolean;

  public validateRequest(): ValidationChain[] {
    const isValidType: CustomValidator = (value) => {
      if (value !== 'SHORT' && value !== 'FULL') {
        return Promise.reject('Invalid type value'); // eslint-disable-line prefer-promise-reject-errors
      }
      return Promise.resolve(true);
    };

    return [
      check('type').not().isEmpty().withMessage('Type param missing'),
      check('type').custom(isValidType),
      check('shuffle').not().isEmpty().withMessage('Shuffle param missing'),
    ];
  }
}
