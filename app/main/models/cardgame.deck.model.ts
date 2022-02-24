/*
 *  @Project:        Rhino
 *  @File:           rh.address.model.ts
 *  @Description:    This model represents a address model.
 *  @Created:        19 August 2019
 *  @CreatedBy:      Dharin Rajgor
 */

import { CardModel } from "./cardgame.card.model";

/**
 * This model represents a address model.
 */
 export class DeckModel {

    constructor() {
    }
  
    /** labelid */
    public id?: number;
  
    /** address */
    public shuffle: boolean;

    /** address */
    public createdAt?: Date;

    /** address */
    public updatedAt?: Date;

    /** address */
    public remainingCards: number;

    /** address */
    public cards: CardModel[];
  
  }
  