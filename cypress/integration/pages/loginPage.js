

let txtUserId = "input[id='user-name']"
let txtPassword = "input[id='password']"
let btnSubmit = "input[id='login-button']"

Cypress.Commands.add( 'openUrl', (data) => {
    cy.visit(data.url)
})

Cypress.Commands.add( 'login', (config, credential) => {
    cy.visit(config.url)
    cy.get(txtUserId).type(credential.userId)
    cy.get(txtPassword).type(credential.password)
    cy.get(btnSubmit).click()
})
    
        
   
