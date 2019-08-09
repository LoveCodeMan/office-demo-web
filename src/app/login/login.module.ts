import { NgModule } from "@angular/core";
import { LoginRoutingModule } from './login.routing.module'
import { LoginComponent } from './login.component'
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  imports: [LoginRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService]
})

export class LoginModule { }