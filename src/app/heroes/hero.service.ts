import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: string): Observable<Hero> {
    const hero = of(HEROES.filter(h => h.id === Number(id))[0]);
    this.messageService.add(`HeroService: fetched hero ${id}`);
    return hero;
  }
}
