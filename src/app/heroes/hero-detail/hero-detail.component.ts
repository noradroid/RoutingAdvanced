import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.heroService.getHero(params.get('id')!))
    // );

    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(String(id)).subscribe(hero => this.hero = hero)
  }

  gotoHeroes(hero: Hero) {
    const id = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: id, name: "food"}]);
  }
}
