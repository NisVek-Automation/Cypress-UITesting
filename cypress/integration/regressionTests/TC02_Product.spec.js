
describe('Verify the Product page', () => {
    beforeEach(function () {
        cy.fixture('config').as('config')
    })

    it('Login the Application', function () {

        cy.login(this.config, this.config)
        //expect(true).to.be.false
    })
})