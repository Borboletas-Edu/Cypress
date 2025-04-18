/// <reference types='cypress'/>
const usu = require('../../fixtures/usuario.json')

describe('Funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Login válido', () => {
        cy.get('#username').type('edu.teste@teste.com')
        cy.get('#password').type('senhaforte')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should
        ('contain', 'Welcome')
    })
    
    it('Login com email inválido', () => {
        cy.get('#username').type('xxxzzzxxx@gmail.com')
        cy.get('#password').type('senhaforte')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 
        'Endereço de e-mail desconhecido') 
    
    })

    it('Login com senha inválida', () => {
        cy.get('#username').type('edu.teste@teste.com')
        cy.get('#password').type('xxxx')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail')
    });

    it('Login utilizando massa de dados', () => {
        cy.get('#username').type(usu.email)
        cy.get('#password').type(usu.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should
        ('contain', 'Welcome')
    });

    it('Login utilizando  e adicionando log', () => {
        cy.fixture('usuario').then(usu => {
            cy.get('#username').type(usu.email, {log: false})
            cy.get('#password').type(usu.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('a > .hidden-xs').should
            ('contain', 'Welcome')
        })
    });

    it('Login com sucesso usando fixture', () => {
        cy.fixture('usuario').then(dadosdelogin => {
            cy.get('#username').type(dadosdelogin.email)
            cy.get('#password').type(dadosdelogin.senha)   
            cy.get('.woocommerce-form > .button').click()   
            cy.get('a > .hidden-xs').should
            ('contain', 'Welcome')       
        })     
    });

    it('Login utilizando comandos customizados', () => {
        cy.login('edu.teste@teste.com', 'senhaforte')
        cy.get('a > .hidden-xs').should
        ('contain', 'Welcome')
    });



})

