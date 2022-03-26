import { NetaComponent } from './containers/neta/neta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetaHomeComponent } from './components/neta-home/neta-home.component';
import { NetaNewsComponent } from './components/neta-news/neta-news.component';
import { NetaOtherComponent } from './components/neta-other/neta-other.component';
import { NetaVideosComponent } from './components/neta-videos/neta-videos.component';
const routes: Routes = [
  {
    path: '',
    component: NetaComponent,
    data: { title: 'app.menu.features' },
    children: [
      { path: 'home', component: NetaHomeComponent, data: { label: 'Home' } },
      { path: 'news', component: NetaNewsComponent, data: { label: 'news' } },
      { path: 'videos', component: NetaVideosComponent, data: { label: 'videos' } },
      { path: 'other', component: NetaOtherComponent, data: { label: 'other' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetaRoutingModule {}
