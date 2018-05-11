import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CharacterService } from '../../shared/services/character.service';
import { Character } from '../../shared/models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.css'],
})
export class CharacterNewComponent implements OnInit {
  public newCharacterForm: FormGroup;
  public error:string;

  constructor(private characterService:CharacterService) {}

  ngOnInit() {
    this.newCharacterForm = new FormGroup({
      nom: new FormControl(''),
      bio: new FormControl('')
    })
  }

  submit(){
    // this.characterService.createCharacter(this.newCharacterForm.value).subscribe((character: Character) => {});
  }
}
