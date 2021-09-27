let btnMenu = "button[id='react-burger-menu-btn']"
let btnlogout = "a[id='logout_sidebar_link']"

Cypress.Commands.add( 'logout', () => {
    cy.get(btnMenu).click()
    cy.get(btnlogout).click()
})