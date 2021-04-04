import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

    <h1>{{ title }}</h1>
    <h2>La base es: {{ base }}</h2>
    <button (click)="acumular(+base)">+{{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>

  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.number += valor;
  }
}
