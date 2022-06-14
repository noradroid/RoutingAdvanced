import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
