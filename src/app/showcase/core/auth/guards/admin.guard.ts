import { map, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.afAuth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState) { // check are user is logged in
          const token = await authState.getIdTokenResult();
          if (!token.claims.admin) { // check claims
            alert('Not allowed');
            console.log('Not allowed');
            return false
          } else {
            return true
          }
        } else {
          return false
        }
      }),
    )
  }

}
