import { OfficialComponent } from './official.component'
import { Routes, RouterModule } from '@angular/router'
import { TodoEdocComponent } from './sendmessage/todoEdoc.component'

const routes: Routes = [
  {
    path: '',
    component: OfficialComponent,
    children: [
      {
        path: 'todoEdoc',
        component: TodoEdocComponent
      }
    ]
  }
]