import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router'
import { RegisterService } from './register.service'
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  isRight = false
  isSubmit = false

  // 初始化表单内容
  constructor(private fb: FormBuilder, private router: Router, private service: RegisterService, private message: NzMessageService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['']
    });
  }

  ngOnInit() { }

  // 表单提交初步验证
  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    let data = {
      username: '',
      email: '',
      password: '',
      comment: ''
    }
    data.username = value.userName 
    data.email = value.email
    data.password = value.password
    data.comment = value.comment
    this.service.submit(data).subscribe(data => {
      this.isSubmit = data
      if (this.isSubmit) {
        this.message.success('注册成功！', {
          nzDuration: 2000
        });
        this.router.navigate(['login'])
      } else {
        this.message.error('注册失败，请再次核实相关信息再提交！', {
          nzDuration: 1000
        });
      }
    })
  }

  // 表单内容重置
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  // 判断注册密码是否一致
  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }
  
  // 验证用户名是否可用
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        let username = control.value;
        this.service.register(username).subscribe(data => {
          this.isRight = data
          if (this.isRight) {
            observer.next(null);
          } else {
            observer.next({ error: true, duplicated: true });
          }
          observer.complete();
        })
      }, 1000);
    });

// 确认前后密码是否一致
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  goBack() {
    this.router.navigate(["login"])
  }
}
