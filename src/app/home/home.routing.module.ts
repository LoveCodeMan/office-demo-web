import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { IndexComponent } from './index/index.component'
import { OfficialComponent } from './official/official.component'
import { SuperviseComponent } from './supervise/supervise.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'official',
        component: OfficialComponent
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