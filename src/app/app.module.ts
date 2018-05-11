import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// COMPONENTS
import { AppComponent } from './app.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { PersonalitiesListComponent } from './personalities-list/personalities-list.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { FilmDetailsComponent } from './films-list/film-details/film-details.component';
import { CharacterDetailsComponent } from './characters-list/character-details/character-details.component';
import { JobDetailsComponent } from './jobs-list/job-details/job-details.component';
import { PersonalityDetailsComponent } from './personalities-list/personality-details/personality-details.component';
import { GenreDetailsComponent } from './genres-list/genre-details/genre-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParametersComponent } from './parameters/parameters.component';
import { FilmEditComponent } from './parameters/film-edit/film-edit.component';
import { FilmNewComponent } from './parameters/film-new/film-new.component';
import { PersonalityEditComponent } from './parameters/personality-edit/personality-edit.component';
import { PersonalityNewComponent } from './parameters/personality-new/personality-new.component';
import { CharacterEditComponent } from './parameters/character-edit/character-edit.component';
import { CharacterNewComponent } from './parameters/character-new/character-new.component';
import { JobEditComponent } from './parameters/job-edit/job-edit.component';
import { JobNewComponent } from './parameters/job-new/job-new.component';
import { GenreEditComponent } from './parameters/genre-edit/genre-edit.component';
import { GenreNewComponent } from './parameters/genre-new/genre-new.component';

// MODULES
import { MaterialModule } from './material/material.module';

// SERVICES
import { CharacterService } from './shared/services/character.service';
import { FilmService } from './shared/services/film.service';
import { GenreService } from './shared/services/genre.service';
import { JobService } from './shared/services/job.service';
import { PersonalityService } from './shared/services/personality.service';

// ROUTING
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    PersonalitiesListComponent,
    CharactersListComponent,
    GenresListComponent,
    JobsListComponent,
    FilmDetailsComponent,
    CharacterDetailsComponent,
    JobDetailsComponent,
    PersonalityDetailsComponent,
    GenreDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ParametersComponent,
    FilmEditComponent,
    FilmNewComponent,
    PersonalityEditComponent,
    PersonalityNewComponent,
    CharacterEditComponent,
    CharacterNewComponent,
    JobEditComponent,
    JobNewComponent,
    GenreEditComponent,
    GenreNewComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CharacterService,
    FilmService,
    GenreService,
    JobService,
    PersonalityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
