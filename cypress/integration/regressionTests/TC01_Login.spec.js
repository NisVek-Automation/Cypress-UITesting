let rowsLength;
describe('Data Driven Testing Using Excel FIle', () => {
  before(() => {
    //get configuration data
    cy.fixture('config').then(function (config) {
      this.config = config
    })
    
    cy.task('readXlsx', { file: 'cypress/fixtures/DataSheet.xlsx', sheet: "LoginProcess" }).then((rows) => {
      rowsLength = rows.length;
      cy.writeFile("cypress/fixtures/TestxlsxData.json", { rows })
    })
 })

  beforeEach(function () {
    cy.fixture('TestxlsxData').as('data')
  })

  it('Different user login test', function () {
    //cy.fixture('TestxlsxData').then((data) => {
      for (let i = 0; i < rowsLength; i++) {
        
        if (this.data.rows[i].run == "yes") {
          cy.login(this.config, this.data.rows[i])
          cy.logout()
        }
        
      }
   // }) 
  })
})