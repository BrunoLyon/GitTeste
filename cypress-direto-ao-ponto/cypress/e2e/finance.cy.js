describe('Transações', () => {

    beforeEach(()=> {

        cy.visit("https://devfinance-agilizei.netlify.app/")

    });

    it('Cadastrar uma Entrada', () => {

        criarTransacao("Freela", 250)
    criarTransacao("Freela do fim de semana", 250)

   // cy.get("tbody tr td.description")
    //.should("have.text", "Freela")

    });
it ('Cadastrar uma Saida', () => {
    
    criarTransacao("Cinema", -45)
    cy.get("tbody tr td.description")

    .should("have.text", "Cinema")
});
it ('Excluir transacao', () => {

    criarTransacao("Freela da semana", 250)
    criarTransacao("mesada", 100)
    cy.contains(".description", "Freela da semana")
    .parent()
    .find('img')
    .click()

    cy.get('tbody tr').should("have.length", 1)
    
});


});


function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15")

    cy.contains('button', 'Salvar').click()


}