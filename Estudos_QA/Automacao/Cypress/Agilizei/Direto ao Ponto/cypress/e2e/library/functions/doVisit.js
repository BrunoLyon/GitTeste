import { pageObjects } from "../pageObjects/pageObjects";

    export function doVisit()
    {
        cy.visit('https://amazon.com.br')

        cy.get("#nav-logo > a")
            .should("be.visible")
    }