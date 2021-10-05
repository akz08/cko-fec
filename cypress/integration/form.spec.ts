describe('Comment form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can be submitted and updates the list', () => {
    const name = 'John Doe';
    const email = 'example@example.com';
    const comment = 'I hated it';

    cy.get('[data-testid=comment_formName]')
      .type(name)
      .should('have.value', name);
    cy.get('[data-testid=comment_formEmail]')
      .type(email)
      .should('have.value', email);
    cy.get('[data-testid=comment_formComment]')
      .type(comment)
      .should('have.value', comment);
    cy.get('[data-testid=comment_formSubmit]').click();

    cy.get('div.comment-content')
      .first()
      .find('h3')
      .should('contain.text', name);
  });
});
