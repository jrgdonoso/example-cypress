describe('test examples', () => {
    before(() => {
        console.log("=>Soy before all")
    })

    beforeEach(() => {
        console.log("=>Soy before each global")
    })

    afterEach(() => {
        console.log("=>Soy afterEach global")
    })



    it('first test global', () => {
        cy.log("Primer test global, con variable ambiente VAR_ENV_FILE_CONFIG=> " + Cypress.env("VAR_ENV_FILE_CONFIG"))
        console.log("Soy primer test global")
    })

    it('second test global', () => {
        cy.log("Segundo test global")
        console.log("Soy segundo test global")

    })

    specify('tercer test', () => {
        cy.log("Tercer test")
        console.log("Soy tercer test")

    })




    context('test contexto', () => {
        beforeEach(() => {
            console.log("=>Soy before each CONTEXTO")
        })

        afterEach(() => {
            console.log("=>Soy afterEach CONTEXTO")
        })



        it('first test CONTEXTO', () => {
            cy.log("Primer test CONTEXTO, con variable ambiente VAR_ENV_FILE_CONFIG=> " + Cypress.env("VAR_ENV_FILE_CONFIG"))
            console.log("Soy primer test CONTEXTO")
        })

        it('second test CONTEXTO', () => {
            cy.log("Segundo test CONTEXTO")
            console.log("Soy segundo test CONTEXTO")

        })
    })
    after(() => {
        console.log("=>Soy after all")
    })

})
