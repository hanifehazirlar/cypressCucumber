import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";

Given('url e git',()=>{
    cy.visit('https://paylinn.com/')

})
And('login tikla',()=>{
    cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
    
})
And('username ve password gir',()=>{
cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')
    
})
And('login butonuna tikla',()=>{
    cy.get('.MuiButton-label').click()
    
})
Then('giris yapildigini dogrula',()=>{
    cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text','Welcome')

    
})