import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { AppLayoutComponent } from './layouts/app.layout.component';
import { AdminGuardService } from './core/auth/guards/admin.guard';
import { AppProtectedResolver } from './services/app.protected.resolver';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: LandingComponent, pathMatch: 'full' },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    // { path: '', redirectTo: 'setup', pathMatch: 'full' },
                    { path: 'netas', loadChildren: () => import('./components/politicians/avatardemo.module').then(m => m.AvatarDemoModule) },
                    {
                        path: 'dashboard',
                        loadChildren: () =>
                            import('./components/dashboard/setup.module').then((m) => m.SetupModule),
                        // resolve: {
                        //   profile: AppResolver
                        // },
                        resolve: {
                          profile: AppProtectedResolver
                        }
                        // canActivate: [MarketingGuardService]
                    },
                    {
                        path: 'admin-dashboard',
                        loadChildren: () =>
                            import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
                            canActivate: [AdminGuardService]
                    },
                    
                ],
            },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'netas', loadChildren: () => import('./components/politicians/avatardemo.module').then(m => m.AvatarDemoModule) },
                    { path: 'home', loadChildren: () => import('./components/home/setup.module').then(m => m.SetupModule) },
                    {
                        path: 'admin-dashboard',
                        loadChildren: () =>
                            import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
                    },
                ],
            },
        ],
            { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
