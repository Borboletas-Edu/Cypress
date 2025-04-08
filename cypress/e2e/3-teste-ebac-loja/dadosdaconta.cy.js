/// <reference types= 'cypress'/>

import { faker } from '@faker-js/faker';

describe('Mudando dados da conta', () => {
    
    it('Usando dados customizados', () => {
        cy.login('edu.teste@teste.com', 'senhaforte')
        cy.alterarDados(faker.person.firstName(), faker.person.lastName(), "Edu")
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});
