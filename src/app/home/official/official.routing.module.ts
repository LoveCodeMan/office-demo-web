import { OfficialComponent } from './official.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { TodoEdocComponent } from './sendmessage/todoEdoc/todoEdoc.component'
import { AddEdocComponent } from './sendmessage/addEdoc/addEdoc.component'
import { AddJYBComponent } from './sendmessage/addJYB/addJYB.component'

const routes: Routes = [
  {
    path: '',
    component: OfficialComponent,
    children: [
      {
        path: 'todoEdoc',
        component: TodoEdocComponent
      },
      {
        path: 'addEdoc',
        component: AddEdocComponent
      },
      {
        path: 'addJYB',
        component: AddJYBComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OfficialRoutingModule { }