class produtosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProdutoBloco(nomeProduto) {
        cy.get('.product-block > .caption > .meta > .infor > .name > a').contains(nomeProduto).click()
    }

    buscarProdutoLista(produto) {
        cy.get('[type="text"]').eq(1).type(produto)
        cy.get('[type="submit"]').eq(1).click()
    }

    visitarProduto(nomeProduto){
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.wait(500)
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain',  "no seu carrinho.")
    }











}

export default new produtosPage()