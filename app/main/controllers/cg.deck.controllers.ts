/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

/*
*  @Project:        CardGame
*  @File:           cg.deck.controller.ts
*  @Description:    This is the controllers class for deck
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import DeckService from '../services/cg.deck.service';
import { DeckCreateRequestModel } from '../models/cg.deck.create.request.model';
import { DeckDrawRequestModel } from '../models/cg.deck.draw.request.model';
import { ICard } from '../interface/cg.card.interface';
import { IDeck } from '../interface/cg.deck.interface';

class DeckController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const deckService: DeckService = new DeckService();
      validationResult(req).throw();
      const reqData: DeckCreateRequestModel = req.body;
      const result: IDeck = await deckService.createDeck(reqData);
      res.json(
        {
          deckId: result._id, // eslint-disable-line no-underscore-dangle
          type: reqData.type,
          shuffle: result.shuffle,
          remaining: result.remainingCards,
        },
      );
    } catch (err) {
      res.status(400).json(err);
    }
  }

  public static async open(req: Request, res: Response): Promise<void> {
    try {
      const deckService: DeckService = new DeckService();
      validationResult(req).throw();
      const result: IDeck = await deckService.openDeck(req.params.deckId);
      res.json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  public static async draw(req: Request, res: Response): Promise<void> {
    try {
      const deckService: DeckService = new DeckService();
      validationResult(req).throw();
      const reqData: DeckDrawRequestModel = req.body;
      const result: ICard[] | {} = await deckService.drawDeckCard(reqData);
      res.json({ cards: result });
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

export default DeckController;
