/// <reference types="cypress" />
let Corredoresurl = 'https://corredores-sbi-cotizador-scrum.sbi.uy/login'
let boton = 'button[class="button button-green"]'
//import 'cypress-xpath';

import { loginCorredores } from '../commands.js'
import {clickConTiempo} from '../commands.js'



describe('Validar Login Corredores', () => {
    beforeEach(() => {
        

      });

    it('Validar User incorrecto', () => {
     cy.visit(Corredoresurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type("ambar@gmail.com")
     cy.get('input[placeholder="Contraseña"]')
     .type("ambar123")
     cy.get('button[class="button button-green"]').ClickConTiempo()
    
     cy.get('.form-bottom-error > span', {timeout: 60000}).should('be.visible') // Mensaje de error: 'Email y/o contrasena incorrectas'



   } )

    it('Validar Pass incorrecto', () => {
     cy.visit(Corredoresurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type("ambar@yopmail.com")
     cy.get('input[placeholder="Contraseña"]')
     .type("error123")
     cy.get('button[class="button button-green"]').first().click()
    
     cy.get('.form-bottom-error > span', {timeout: 60000}).should('be.visible') // Mensaje de error: 'Email y/o contrasena incorrectas'
        
        
    } ) 


} )

