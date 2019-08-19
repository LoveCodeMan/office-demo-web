import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { IndexComponent } from './index/index.component'
import { SuperviseComponent } from './supervise/supervise.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    // redirectTo: 'home/index',
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'official',
        loadChildren: () => import('./official/official.module').then(m => m.OfficialModule)
      },
      {
        path: 'supervise',
        component: SuperviseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }