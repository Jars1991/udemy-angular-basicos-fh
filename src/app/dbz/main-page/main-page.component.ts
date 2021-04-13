import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newCharacter: Character = {
    name: 'Krillin',
    power: 14000
  };

  addCharacter() {
    console.log(this.newCharacter);
  }
}
