import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { loginAction, SigninComponent } from '../components/signin/signin.component';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, take, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { StateService } from '../../../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    public auth: AuthService,
    private dialog: MatDialog,
    public stateService: StateService
  ) { }

  public prompt(): Promise<any> {
    return this.dialog.open<SigninComponent, loginAction, {}>(SigninComponent, {})
      .afterClosed().toPromise();
  }

  public authenticate(): Promise<any> {
    return this.stateService.appSettingsSubject.pipe(
      take(1),
      tap(s => { }),
      switchMap(user => !user ? this.prompt() : of(user))
    ).toPromise();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticate()
      .then(user => !!user).finally(() => {
        console.log('Resolved Auth Guard');
      });
  }

}
