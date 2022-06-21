import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

// For general implementation (to implement canDeactivate method in a component class)
// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class CanDeactivateGuard
//   implements CanDeactivate<CanComponentDeactivate>
// {
//   canDeactivate(
//     component: CanComponentDeactivate
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     // if the canDeactivate() method exists in the component when the guard is called, the method will be called.
//     // else return true to allow deactivation.
//     // this allows the deactivation logic to exist in the component
//     return component.canDeactivate ? component.canDeactivate() : true;
//   }
// }

// Component-specific implementation
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<CrisisDetailComponent>
{
  canDeactivate(
    component: CrisisDetailComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(`canDeactivate(): ${route.paramMap.get('id')}`);
    console.log(`canDeactivate(): ${state.url}`); // current url

    if (!component.crisis || component.crisis.name === component.editName) {
      return true;
    }

    return component.confirmationService.confirm(`Discard changes?`);
  }
}
