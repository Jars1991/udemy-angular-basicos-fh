import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 14000
    },
    {
      name: 'Krillin',
      power: 5000
    },
    {
      name: 'Vegeta',
      power: 7000
    }
  ];

  newCharacter: Character = {
    name: 'trunks',
    power: 14000
  };

  onNewCharacter(event: Character) {
    if(event.name.trim().length == 0){return;}

    this.characters.push(event);
    this.newCharacter = {
      name: '',
      power: 0
    };
  }
}
