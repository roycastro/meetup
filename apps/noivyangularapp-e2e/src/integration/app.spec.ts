import { getGreeting } from '../support/app.po';

describe('noivyangularapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to noivyangularapp!');
  });
});
