import supertest from 'supertest';

import { app } from '../../src/app';

describe('Test root path', () => {
  test('It should respond to GET method', () => {
    return supertest(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
