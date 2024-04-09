/// <reference types="cypress" />
let BOurl = 'https://back-sbi-cotizador-scrum.sbi.uy/login'
let boton = 'button[class="button button-green"]'
//import 'cypress-xpath';

import { loginBO } from '../commands.js'
import {clickConTiempo} from '../commands.js'



describe('Validar Login Administrador', () => {
    beforeEach(() => {
        

      });

    it('Validar User incorrecto', () => {
     cy.visit(BOurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type("proyectoSBICotizadosr@switch.com.uy")
     cy.get('input[placeholder="Contraseña"]')
     .type("admin1234")
     cy.get('button[class="button button-green"]').ClickConTiempo()
    
     cy.get('.form-bottom-error > span', {timeout: 60000}).should('be.visible') // Mensaje de error: 'Email y/o contrasena incorrectas'



   } )

    it('Validar Pass incorrecto', () => {
     cy.visit(BOurl)
        
     cy.get('input[placeholder="Credencial"]',{timeout: 7000})
     .type("proyectoSBICotizador@switch.com.uy")
     cy.get('input[placeholder="Contraseña"]')
     .type("error123")
     cy.get('button[class="button button-green"]').first().click()
    
     cy.get('.form-bottom-error > span', {timeout: 60000}).should('be.visible') // Mensaje de error: 'Email y/o contrasena incorrectas'
        
        
    } ) 


} )

