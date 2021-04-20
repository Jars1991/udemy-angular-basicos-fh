import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html'
})
export class NewCharacterComponent {

  constructor(private DbzService: DbzService){}

  @Input() newCharacter : Character = {
    name: '',
    power: 0
  };


  addCharacter() {
    this.DbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    };
  }
}
