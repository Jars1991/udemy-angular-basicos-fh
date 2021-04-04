import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  name: string = 'Peter parker';
  age: number = 25;

  get capitalizedName(): string {
      return this.name.toUpperCase();
  }

  getName(): string {
      return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Bruce Wayne';
  }

  changeAge(): void {
    this.age = 40;
  }
}
