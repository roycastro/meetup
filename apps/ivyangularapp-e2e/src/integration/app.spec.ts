import { getGreeting } from '../support/app.po';

describe('ivyangularapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ivyangularapp!');
  });
});
