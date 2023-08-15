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

    it("Verify View Product", () => {
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click({force: true});
            cy.url().should(`include`, `/product_details`);
            cy.get('.view-product > img').should(`be.visible`);
            cy.get('.product-information').should(`be.visible`);
            cy.get('#quantity').clear();
            cy.get('#quantity').type(`4`);
            cy.get("button[type='button']").click();
            cy.get('u').should(`have.text`, `View Cart`).click();
            cy.get('.disabled').should(`contain`, `4`);
    });
})