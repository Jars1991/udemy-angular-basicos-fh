import { Injectable } from "@angular/core";

import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

  constructor(){
    console.log("init dbz service");
  }

  private _characters: Character[] = [
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

  get characters (): Character[] {
    return [...this._characters];
  }

  addCharacter(character: Character) {
    if(character.name.trim().length == 0){return;}

    this._characters.push(character);
  }
}
