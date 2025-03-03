/// <reference types='cypress'/>

describe('Análise na lista de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Entrada na página de descrição detalhada do primeiro produto', () => {
        cy.get('.image ').first().click()
        cy.get('#tab-title-description').should('contain', 'Descrição')
    });
       
    it('Entrada na página de descrição detalhada do ultimo produto', () => {
        cy.get('.image ').last().click()
        cy.get('#tab-title-description').should('contain', 'Descrição')
    });

    it('Entrada na página de descrição detalhada do quinto produto', () => {
        cy.get('.image ').eq(5).click()
        cy.get('#tab-title-description').should('contain', 'Descrição')
    });

});
