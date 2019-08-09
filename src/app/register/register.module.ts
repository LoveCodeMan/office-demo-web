import { NgModule } from "@angular/core";
import { RegisterRoutingModule } from './register.routing.module'
import { RegisterComponent } from './register.component'
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RegisterRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})

export class RegisterModule { 
  
}