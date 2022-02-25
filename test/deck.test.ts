/* eslint-disable import/no-unresolved */
/* global describe, beforeEach, it */

/*
*  @Project:        CardGame
*  @File:           deck.ts
*  @Description:    This is the test for deck API endpoints
*  @Created:        24 Feb 2022
*  @CreatedBy:      Abdul Wahab
*/

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../app/main/index';
import Deck from '../app/main/models/cg.deck.model';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('Deck', () => {
  beforeEach((done) => {
    Deck.remove({}, () => {
      done();
    });
  });
  describe('/POST deck', () => {
    it('it should not POST a deck type field', (done) => {
      const deck = {
        shuffle: true,
      };
      chai.request(app)
        .post('/create')
        .send(deck)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.errors.should.have.property('messge');
          done();
        });
    });
    it('it should POST a deck ', (done) => {
      const deck = {
        shuffle: true,
        type: 'FULL',
      };
      chai.request(app)
        .post('/create')
        .send(deck)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.book.should.have.property('deckId');
          res.body.book.should.have.property('shuffle');
          res.body.book.should.have.property('type');
          done();
        });
    });
  });
});
