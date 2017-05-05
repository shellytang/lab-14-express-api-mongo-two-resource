'use strict';

const server = require('../server');
const chai = require('chai');
const expect = require('chai').expect;

chai.use(http);

describe('Server Module', () => {

  describe('SHELTER MODEL Routes', () => {

    describe('/api/shelter/:id endpoint', () => {

      describe('GET Method for one item', () => {
        //describe
      });

      describe('PUT Method', () => {
        //describe
      });

      describe('DELETE Method', () => {
        //desribe
      });

    });

    describe('api/shelter endpoint', () => {

      describe('POST Method', () => {
        //describe
      });

      describe('GET Method for all items', () => {
        //describe
      });

    });

  });

  describe('CAT MODEL Routes', () => {

    describe('/api/cat/:id endpoint', () => {

      describe('GET Method for one item', () => {
        //describe
      });

      describe('PUT Method', () => {
        //describe
      });

      describe('DELETE Method', () => {
        //desribe
      });

    });

    describe('/api/shelter/:shelterId/cat endpoint', () => {

      describe('POST Method', () => {
        //describe
      });

    });

    describe('/api/cat endpoint', () => {

      describe('GET Method for all items', () => {
        //describe
      });

    });
  });
});
