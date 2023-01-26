/// <reference types="cypress"/>
import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";

Given('url e git',()=>{
    cy.visit('https://www.google.com/')
})
And('arama yapilacak {string}',(capitals)=>{
    cy.get('.gLFyf').type(capitals)
    cy.get('.FPdoLc > center > .gNO89b').click({force: true})
})
Then('arama yapildigini kontrol et {string}',(capitals)=>{
    //cy.title().should('include',capitals)
    cy.get('input.gLFyf').should('have.value',capitals)
})