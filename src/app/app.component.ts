import { Component } from '@angular/core';
import {Anime} from './model/anime';
import {ANIMES} from './model/animes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ATV7';
  animes: Anime[] = ANIMES;
  animeRegistering: Anime = new Anime('','','');
  canEdit = false;

  addAnime() {
    if(this.canEdit) {
      this.canEdit = false;
      this.animeRegistering = new Anime('','','');
    }
    else {
      this.animes.push(this.animeRegistering);
      this.animeRegistering = new Anime('','','');
    }
  }

  delAnime(animeToDelete: Anime) {
    const index = this.animes.findIndex((anime) => anime === animeToDelete);
    if (index !== -1) {
      this.animes.splice(index, 1);
    }
  }

  editAnime(animeToEdit: Anime) {
    this.canEdit = true;
    this.animeRegistering = animeToEdit;
  }
}
let ANIMESLIST = ANIMES;
