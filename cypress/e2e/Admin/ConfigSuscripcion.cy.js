/// <reference types="cypress" />
let BOurl = 'https://back-sbi-cotizador-scrum.sbi.uy/login'
let boton = 'button[class="button button-green"]'
//import 'cypress-xpath';

import { loginBO } from '../commands.js'
import {clickConTiempo} from '../commands.js'



describe('Validar Configuración de suscripciones', () => {
    beforeEach(() => {

        loginBO()

      });

    it('Habilitar/Deshabilitar check suscripción Agregar paquete', () => {

        //Este script valida el correcto funcionamiento del check de suscripciones al momento de Agregar un paquete en un Producto 

        cy.ClickConTiempoSelector(':nth-child(8) > .section-title')
        cy.ClickConTiempoSelector(':nth-child(8) > .sub-items > :nth-child(1) > div')

        //Se hace click en las acciones del producto Seguro para Fotografos y se Agrega paquete
        cy.ClickConTiempoSelector('#cdk-drop-list-0 > .cdk-drag > .card-container > .card > .d-flex > .action-button > .fas')
        cy.ClickConTiempoSelector('#actionModalContainer > ul > :nth-child(6)')

        //Se valida efectivamente que al agregar un paquete el check esta habilitado y seleccionado por defecto
        cy.get('label.checkbox-container.suma-aseg-container > input[type="checkbox"][formcontrolname="hasSubscription"]')
  .as('checkbox');

// Verificar si el checkbox está marcado
cy.EsperaConTiempoSelector('@checkbox')
  .should('be.checked'); // Verifica que el checkbox esté marcado
  cy.ClickConTiempoSelector('.subscription-option-container > .checkbox-input-container > .checkbox-container > .checkmark')
// Para verificar si el checkbox está desmarcado, puedes usar lo siguiente:
cy.EsperaConTiempoSelector('@checkbox')
  .should('not.be.checked'); // Verifica que el checkbox no esté marcado
   } )

    it('Habilitar/Deshabilitar check suscripción Editar paquete', () => {
        //Este script valida el correcto funcionamiento del check de suscripciones al momento de Editar un paquete en un Producto 

        cy.ClickConTiempoSelector(':nth-child(8) > .section-title')
        cy.ClickConTiempoSelector(':nth-child(8) > .sub-items > :nth-child(1) > div')

        //Se hace click en las acciones del producto Seguro para Fotografos y se Agrega paquete
        cy.ClickConTiempoSelector('#cdk-drop-list-0 > .cdk-drag > .card-container > .card > .d-flex > .action-button > .fas')
        cy.ClickConTiempoSelector('#actionModalContainer > ul > :nth-child(5)')

        //Click en el paquete que se quiere visualizar
        cy.ClickConTiempoSelector('#cdk-drop-list-36 > .cdk-drag > .card > :nth-child(1) > .button-container > .card__action-button') //Brapaquete21272
        cy.ClickConTiempoSelector('#actionModalContainer > ul > :nth-child(1)')

        
    
// Verificar si el checkbox está marcado
    cy.EsperaConTiempoSelector('.checkbox-input-container > .ng-untouched').should('be.checked')
   } )

     

    it('Validar Cálculo en modificar coeficiente', () => {

        //Este script valida el correcto funcionamiento del campo Coeficiente cuando se modifica y se calcula el precio mensual

        cy.ClickConTiempoSelector(':nth-child(8) > .section-title')
        cy.ClickConTiempoSelector(':nth-child(8) > .sub-items > :nth-child(1) > div')

        //Se hace click en las acciones del producto Seguro para Fotografos y se modifica paquete
        cy.ClickConTiempoSelector('#cdk-drop-list-0 > .cdk-drag > .card-container > .card > .d-flex > .action-button > .fas')
        cy.ClickConTiempoSelector('#actionModalContainer > ul > :nth-child(5)')

        cy.ClickConTiempoSelector('#cdk-drop-list-36 > .cdk-drag > .card > :nth-child(1) > .button-container > .card__action-button') //Brapaquete21272
        cy.ClickConTiempoSelector('#actionModalContainer > ul > :nth-child(1)')

        //Precio Anual 1.995,07UYU - Precio Mensual con coeficiente en 1 es UYU 166.26
        cy.EsperaConTiempoSelector('.card__price > span').should('have.text',' UYU 1.995,07/año') // Anual
        cy.EsperaConTiempoSelector('.calculated-subscription').should('have.text',' UYU 166,26/mes ')// Mensual

        //Se modifica el coeficiente a 2

        cy.ClickConTiempoSelector('.calculate-subscription-container > .input-container > .input > .ng-untouched').clear().type(2)
        cy.EsperaConTiempoSelector('.calculated-subscription').should('have.text',' UYU 332,51/mes ')// Mensual

        //Se modifica el valor a 1,55
        cy.ClickConTiempoSelector('.calculate-subscription-container > .input-container > .input > .ng-untouched').clear().type('1,55')
        cy.EsperaConTiempoSelector('.calculated-subscription').should('have.text',' UYU 257,70/mes ')// Mensual
    } )



  } )



