/// <reference types = "cypress"/>
beforeEach(() => {
    cy.visit("https://automationexercise.com/");
})

describe("First Assignment", () => {
    it("verify that home page is visible", () => {
        cy.title().should(`include`, `Automation Exercise`);
        cy.get(`header`).should(`be.visible`);
        cy.get('.navbar-nav').should('exist');
        cy.get('#slider').should(`be.visible`);
        cy.get('.left-sidebar').should(`be.visible`);
        cy.get('.features_items').should(`be.visible`);
        cy.get(`.recommended_items`).should(`be.visible`);
        cy.get(`footer`).should('be.visible');
    });

    it("Product", () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should(`include`, `/products`);
        cy.get(`#sale_image`).should(`be.visible`);
        cy.get('#search_product').should(`be.visible`);
        cy.get('#submit_search').should(`be.visible`);

        cy.get('#search_product').type(`Men Tshirt`);
        cy.get('#submit_search').click();
        cy.get('.productinfo > p').should(`contain`, `Men Tshirt`);
        cy.get('.productinfo > p').should('be.visible');

    })
})