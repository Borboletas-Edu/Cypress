Cypress.Commands.add('login', (email, senha) =>{
    cy.visit('minha-conta')
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('alterarDados', (nome, sobrenome, usuario) => {
    cy.visit('minha-conta/edit-account/')
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').clear()
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
})



