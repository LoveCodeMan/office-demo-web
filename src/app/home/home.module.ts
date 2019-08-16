import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home.routing.module'
import { HomeComponent } from './home.component'
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component'
import { SuperviseComponent } from './supervise/supervise.component'

@NgModule({
  imports: [HomeRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent, IndexComponent, SuperviseComponent],
  exports: [HomeComponent]
})

export class HomeModule { }