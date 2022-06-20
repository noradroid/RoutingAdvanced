import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) {}

  ngOnInit() {
    // this.crisis$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.crisisService.getCrisis(params.get('id')!))
    // );

    const id = this.route.snapshot.paramMap.get('id');
    this.crisisService.getCrisis(String(id)).subscribe(crisis => this.crisis = crisis)
  }

  gotoCrisisCenter(crisis: Crisis) {
    const id = crisis ? crisis.id : null;
    this.router.navigate(['/crisises', { id: id, name: "food"}]);
  }
}
