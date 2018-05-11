import { Route, RouterModule } from '@angular/router';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { ParametersComponent } from './parameters/parameters.component';
  import { CharacterEditComponent } from './parameters/character-edit/character-edit.component';
  import { CharacterNewComponent } from './parameters/character-new/character-new.component';
import { PersonalitiesListComponent } from './personalities-list/personalities-list.component';

const APP_ROUTING : Route[] = [
  { path: '', component: FilmsListComponent, pathMatch:'full' },
  { path: 'characters', component: CharactersListComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'genres', component: GenresListComponent },
  { path: 'jobs', component: JobsListComponent },
  { path: 'parameters', children: [
    { path: '', component: ParametersComponent, pathMatch:'full' },
    { path: 'edit-character', component: CharacterEditComponent },
    { path: 'new-character', component: CharacterNewComponent },
  ] },
  { path: 'personalities', component: PersonalitiesListComponent },
  { path: '**', redirectTo: '/' }
]

export const AppRouting = RouterModule.forRoot(APP_ROUTING);
