import { Component } from "@angular/core";

@Component({
    //selector: 'cdev-home',   // Selector de Componente
    //selector: '.cdev-home',      // Selector de Clase
    selector: '[cdev-home]',    // Selector de Atributo
    template: 'Hola Mundo'
})

export class HomeComponent {
    constructor() {
        console.log('HomeComponent initialized');
    }
}