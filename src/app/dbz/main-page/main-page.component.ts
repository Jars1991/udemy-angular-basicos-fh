import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private DbzService: DbzService){}

  get characters(): Character[] {
    return this.DbzService.characters;
  }

  newCharacter: Character = {
    name: 'trunks',
    power: 14000
  };
}
