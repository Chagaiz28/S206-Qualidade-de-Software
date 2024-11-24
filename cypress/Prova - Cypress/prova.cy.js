describe("Testes de Filtro por busca, Add, Editar", () => {
    it("Deve filtrar por busca", () => {
        visitarSite()
        cy.get('#searchbox').type('Pilot ACE')
        cy.get('#searchsubmit').click()
        cy.get('tbody > tr > :nth-child(1)').should('contain.text', 'Pilot ACE')
    })
    it("Deve adicionar um novo computador com a data de descontinuação antes da de introdução (falha)", () => {
        visitarSite()
        cy.get('#add').click()
        cy.get('#name').type('Teste')
        cy.get('#introduced').type('2021-08-01')
        cy.get('#discontinued').type('2021-07-01')
        cy.get('#company').select('RCA')
        cy.get('.btn.primary').click()
        cy.get('.alert-message.warning').should('contain.text', 'Done! Computer Teste has been created')
    })
    it("Deve adicionar um novo computador com a data de descontinuação depois da de introdução", () => {
        visitarSite()
        cy.get('#add').click()
        cy.get('#name').type('Teste')
        cy.get('#introduced').type('2021-08-01')
        cy.get('#discontinued').type('2021-08-02')
        cy.get('#company').select('RCA')
        cy.get('.btn.primary').click()
        cy.get('.alert-message').should('include.text', 'Computer Teste has been created')
    })
})

function visitarSite(){
    cy.visit("https://computer-database.gatling.io/computers")
}