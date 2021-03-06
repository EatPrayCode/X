import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { forkJoin, zip } from "rxjs";
import { Observable, of } from "rxjs";
import { delay, map, switchMap, take, tap } from "rxjs/operators";
import { AuthService } from "../core/auth/auth.service";
import { SigninComponent, loginAction } from "../core/auth/components/signin/signin.component";
import { StateService } from "./state.service";

@Injectable({
    providedIn: 'root'
})
export class AppProtectedResolver implements Resolve<any> {

    constructor(
        public auth: AuthService,
        private dialog: MatDialog,
        public stateService: StateService
    ) { }

    public prompt(): Observable<any> {
        return this.dialog.open<SigninComponent, loginAction, {}>(SigninComponent, {})
            .afterClosed();
    }

    public authenticate(): Observable<any> {
        const obs1$ = this.auth.afAuth.user.pipe(
            take(1),
            tap(s => { }),
            switchMap(user => !user ? this.prompt() : of(user))
        );
        const obs2$ = of({});
        const obs3$ = forkJoin(obs1$, obs2$)
            .pipe(
                // map(x => x[0].concat(x[1])),
                tap((data: any) => {
                    console.log(data);
                })
            );
        return obs3$;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.authenticate()
    }

}
