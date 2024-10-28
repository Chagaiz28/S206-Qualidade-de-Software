/// <reference = cypress>
describe ("Testes da crianção de registros e login",()=>{

    it ("Teste login com sucesso", ()=>{
        let infos = criarUser()
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should('contain.text', infos[0])

    })
    it("Teste apagar usuario e tentar login", ()=>{
        let infos = criarUser()
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should('contain.text', infos[0])
        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain.text', 'Username or password is incorrect')
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