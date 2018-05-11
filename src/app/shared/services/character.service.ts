import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient) { }

  // createCharacter(character: Character): Observable<Character> {
  //   return this.http.post<Character>('/api/routes/characters/create', character);
  // }

}
