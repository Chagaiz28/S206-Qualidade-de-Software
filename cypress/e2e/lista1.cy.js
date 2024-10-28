describe("Teste de envio de formulário", () => {
  it("Deve enviar o formulário com sucesso", () => {
    cy.visit("https://www.etefmc.com.br/faleconosco")
    cy.get('#contatos').select('6')
    cy.get('#MensagemNome').type('Teste')
    cy.get('#MensagemEmail').type('teste@ges.iantel.br')
    cy.get('#MensagemTelefone').type('123456789')
    cy.get('#MensagemAssunto').type('GES INATEL QUALIDADE DE SOFTWARE')
    cy.get('#MensagemMensagem').type('Testetesteteste')
    })
})