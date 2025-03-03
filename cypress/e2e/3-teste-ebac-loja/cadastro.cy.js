/// <reference types='cypress'/>

import { faker } from '@faker-js/faker';

describe('Análises na função de cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Cadastro e alterações válidas', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('senhaforte')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        it.only('Cadastro e alterações válidas - Usando variáveis', () => {
            
            var primeironome = faker.person.firstName()
            var sobrenome = faker.person.lastName()
            var email = faker.internet.email(nome) 

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type('senhaforte')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(primeironome)
            cy.get('#account_last_name').type(sobrenome)
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        });
    });
}); 
    


