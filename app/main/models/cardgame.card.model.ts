/*
*  @Project:        Rhino
*  @File:           rh.address.model.ts
*  @Description:    This model represents a address model.
*  @Created:        19 August 2019
*  @CreatedBy:      Dharin Rajgor
*/

/**
* This model represents a address model.
*/
export class CardModel {
  
  constructor() {
  }
  
  /** labelid */
  public id?: number;
  
  /** address */
  public value: string;
  
  /** address */
  public suit: string;
  
  /** address */
  public code: string;
  
  /** address */
  public deckId?: number;
  
}