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
export class DeckCreateRequestModel {

  constructor() {

    this.type = "FULL";
    this.shuffled = true;
  }

  /**
   * labelid
   */
  public type: string;

  /**
   * address
   */
  public shuffled: boolean;

}
