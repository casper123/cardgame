/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

/*
 *  @Project:        CardGame
 *  @File:           index.ts
 *  @Description:    This is the starting point of application
 *  @Created:        24 Feb 2022
 *  @CreatedBy:      Abdul Wahab
 */

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as config from 'config';
import { DeckCreateRequestModel } from './main/models/cg.deck.create.request.model';
import { DeckOpenRequestModel } from './main/models/cg.deck.open.request.model';
import { DeckDrawRequestModel } from './main/models/cg.deck.draw.request.model';
import DeckController from './main/controllers/cg.deck.controllers';

mongoose.connect(config.get('dbConnectionString'), (err: any) => {
  if (err) {
    console.log('connection error', err.message);
  } else {
    console.log('Successfully Connected!');
  }
});

const app = express();

if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
}

const deckRequest = new DeckCreateRequestModel();
const deckOpenRequest = new DeckOpenRequestModel();
const deckDrawRequestModel = new DeckDrawRequestModel();

app.use(express.json());

app.post('/create', deckRequest.validateRequest(), DeckController.create);
app.get('/open/:deckId', deckOpenRequest.validateRequest(), DeckController.open);
app.post('/draw', deckDrawRequestModel.validateRequest(), DeckController.draw);

app.use((err, res) => {
  res.status(404).json({ error: { message: 'Route not found' } });
});

app.listen(4800, () => { console.log('🚀 Server ready at: http://localhost:4800'); });
export default app;
