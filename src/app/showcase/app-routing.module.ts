import { BlankComponent } from './layouts/blank/blank.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { AppLayoutComponent } from './layouts/default/app.layout.component';
import { AdminGuardService } from './core/auth/guards/admin.guard';
import { AppProtectedResolver } from './services/app.protected.resolver';
import { NetaLayoutComponent } from './layouts/neta-layout/neta-layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: BlankComponent,
                children: [
                    {
                        path: '',
                        component: LandingComponent,
                        pathMatch: 'full'
                    }
                ],
            },
            {
                path: '',
                component: AppLayoutComponent,
                children: [
                    {
                        path: 'netas',
                        loadChildren: () => import('./components/netas/netas.module').then(m => m.NetasModule)
                    },
                    {
                        path: 'dashboard',
                        loadChildren: () =>
                            import('./components/dashboard/dashboard.module').then((m) => m.ConnectModule),
                        // resolve: {
                        //   profile: AppResolver
                        // },
                        // resolve: {
                        //     profile: AppProtectedResolver
                        // }
                        // canActivate: [MarketingGuardService]
                    },
                    // {
                    //     path: 'admin-dashboard',
                    //     loadChildren: () =>
                    //         import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
                    //     // canActivate: [AdminGuardService]
                    // },
                    {
                        path: 'settings',
                        loadChildren: () =>
                            import('./components/settings/settings.module').then(
                                (m) => m.SettingsModule
                            )
                    },
                    {
                        path: 'home',
                        loadChildren: () => import('./components/home/setup.module').then(m => m.SetupModule)
                    },
                ],
            },
            {
                path: '',
                component: NetaLayoutComponent,
                children: [
                    {
                        path: ':id',
                        loadChildren: () =>
                            import('./components/neta/neta.module').then((m) => m.NetaModule)
                    },
                ],
            },
        ],
            { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
