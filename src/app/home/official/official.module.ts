import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficialRoutingModule } from './official.routing.module'
import { TodoEdocComponent } from './sendmessage/todoEdoc/todoEdoc.component'
import { OfficialComponent } from './official.component'
import { AddEdocComponent } from './sendmessage/addEdoc/addEdoc.component'
import { AddJYBComponent } from './sendmessage/addJYB/addJYB.component'


@NgModule({
  imports: [OfficialRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [OfficialComponent, TodoEdocComponent, AddEdocComponent, AddJYBComponent],
  exports: [OfficialComponent]
})

export class OfficialModule { }