/// <reference = cypress>
describe ("Testes da crianção de registros e login",()=>{
    it ("Teste criação de usuario com sucesso", ()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Henrique")
        cy.get('#Text1').type("Henrique")
        cy.get('#username').type("Henrique")
        cy.get('#password').type("123456")
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain.text', 'Registration successful')
    })
    it ("Teste criação de usuario com falha", ()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Henrique")
        cy.get('#Text1').type("Henrique")
        cy.get('#username').type("Henrique")
        cy.get('.btn-primary').should('be.disabled')
    })
    it ("Teste login com sucesso", ()=>{
        let infos = criarUser()
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should('contain.text', infos[0])

    })
})

function criarUser(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let segundo = new Date().getSeconds().toString()
    let ID = hora + minuto + segundo + "ID"
    let Senha = hora + minuto + segundo + "Senha"
    let infos = [ID, Senha]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(Senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
    return infos
}