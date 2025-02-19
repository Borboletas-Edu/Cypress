/// wreference types="cypress" />

describe('Funcionalidade de login', () => {
    it('Login válido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('edu.teste@teste.com')
        cy.get('#password').type('senhaforte')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(2)').should
        ('contain', 'edu.teste')
    })
    

})
