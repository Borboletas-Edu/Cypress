/// <reference types='cypress'/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Análise na lista de produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

/*
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
*/


// page-objects


    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoBloco('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Apollo-Running-Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
        
    });

    it('Deve adicionar produto no carrinho', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        produtosPage.addProdutoCarrinho('32', 2)
        cy.get('.woocommerce-message').should('contain',  "no seu carrinho.")
    });
    it.only('Deve adicionar produto no carrinho utilizando massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            let item = 1
            produtosPage.buscarProdutoLista(dados[item].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[item].tamanho, dados[item].cor , dados[item].quantidade)
            cy.get('.woocommerce-message').should('contain',  dados[item].nomeProduto)
        })
        })
        
    });



