import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ConfirmationService } from 'src/app/confirmation.service';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;
  editName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
    public confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    // this.crisis$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.crisisService.getCrisis(params.get('id')!))
    // );

    const id = this.route.snapshot.paramMap.get('id');
    this.crisisService.getCrisis(String(id)).subscribe((crisis) => {
      this.crisis = crisis;
      this.editName = this.crisis.name;
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.confirmationService.confirm('Discard changes?');
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  cancel() {
    this.gotoCrises();
  }

  gotoCrises() {
    const id = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: id, foo: 'food' }], {
      relativeTo: this.route,
    });
  }
}
