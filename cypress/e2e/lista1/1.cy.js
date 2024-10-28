describe("Teste de envio de formulário", () => {
    it("Deve selecionar costumer", () => {
      cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/")
      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.get('label').should('contain.text', 'Your Name :')
    })
    it("Deve enviar o formulário com sucesso", () => {
      cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer")
      cy.get('#userSelect').select('Harry Potter')
      cy.get('form.ng-valid > .btn').click()
      cy.get('.fontBig').should('contain.text', 'Harry Potter')
    })
    it("Deve selecionar Bank Manager", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/")
        cy.get('.borderM > :nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass1"]').should('contain.text', 'Add Customer')
        })
    it("Deve adicionar um cliente", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(':nth-child(1) > .form-control').type('Teste')
        cy.get(':nth-child(2) > .form-control').type('Teste')
        cy.get(':nth-child(3) > .form-control').type('Teste')
        cy.get('form.ng-dirty > .btn').click()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer")
        cy.get('#userSelect').select('Teste Teste')
        cy.get('form.ng-valid > .btn').click()
        cy.get('.fontBig').should('contain.text', 'Teste Teste')
        })
    it ("Cliente Henrique Deve existir", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer")
        cy.get('#userSelect').select('Henrique')
        cy.get('form.ng-valid > .btn').click()
        cy.get('.fontBig').should('contain.text', 'Henrique')
    })
    it("Cliente Harry deve ser deletado", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
        cy.get('[ng-class="btnClass3"]').click()
        cy.get(':nth-child(2) > :nth-child(5) > button').click()
        cy.contains('Harry').should('not.exist')

    })

})