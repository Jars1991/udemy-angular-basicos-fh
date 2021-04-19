import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html'
})
export class NewCharacterComponent {
  @Input() newCharacter : Character = {
    name: '',
    power: 0
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addCharacter() {
    this.onNewCharacter.emit(this.newCharacter);
  }
}
