let Corredoresurl = 'https://corredores-sbi-cotizador-scrum.sbi.uy/login'
let Corredoresuser = 'ambar@yopmal.com'
let Corredorespass = 'ambar123'

let BOurl = 'https://back-sbi-cotizador-scrum.sbi.uy/login'
let BOuser = 'proyectoSBICotizador@switch.com.uy'
let BOpass = 'admin1234'



//Logins//

export function loginCorredores() {

    cy.visit(Corredoresurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type(BOuser)
     cy.get('input[placeholder="Contraseña"]')
     .type(BOpass)
     cy.get('button[class="button button-green"]').first().click()
     cy.wait(8000)
     
   cy.get('input[placeholder="Contraseña"]').should(() => {}).then($element => {

    if ($element.length > 0) {
      //existe
      cy.log("Existe error en el login")
      cy.get('button[class="button button-green"]').first().click()
    } else {
      //no existe
      cy.log("Login OK")

   }})}


  //Funciones de uso DOM //

    //ClickConTiempoSelector sirve para hacer click, haciendo un should que exista y con un timeout
    Cypress.Commands.add('ClickConTiempoSelector', { prevSubject: false }, (selector) => {
      return cy.get(selector, { timeout: 80000 }).should('exist').click();
    });

    //ClickConTiempoSelector sirve para hacer click, haciendo un should que exista y con un timeout
    Cypress.Commands.add('EsperaConTiempoSelector', { prevSubject: false }, (selector) => {
      return cy.get(selector, { timeout: 80000 }).should('exist')
    });
    
    
  
  

  export function loginBO() {

    cy.visit(BOurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type(BOuser)
     cy.get('input[placeholder="Contraseña"]')
     .type(BOpass)
     cy.get('button[class="button button-green"]').first().click()
     
  

   }