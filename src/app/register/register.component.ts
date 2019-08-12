import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router'
import { RegisterService } from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;


  // 初始化表单内容
  constructor(private fb: FormBuilder, private router: Router, private service: RegisterService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  // 表单提交初步验证
  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
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

  // 验证用户名是否已注册
  // checkname(event) {
  //   let val = event
  //   this.userSearch(val)
  // }

  // throttle(func, wait) {
  //   let timeout;
  //   return function () {
  //     let context = this;
  //     let args = arguments;

  //     if (timeout) clearTimeout(timeout);

  //     timeout = setTimeout(() => {
  //       func.apply(context, args)
  //       console.log("zhixing")
  //     }, wait);
  //   }
  // }

  // userSearch(val){
  //   let isRight = false 
  //   this.service.register(val).subscribe(data => {
  //     isRight = data
  //   })
  //   if (isRight) {
  //     console.log(isRight)
  //   } else {
  //     console.log("error")
  //   }
  // }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      let isRight = ''
      setTimeout(() => {
        let username = control.value;
        this.service.register(username).subscribe(data => {
          // console.log("data的值为" + data);
          // sessionStorage.setItem("status", data);
          isRight = data
        })
        // isRight = sessionStorage.getItem("status")
        // sessionStorage.setItem("status", "")
        // console.log("isRight的值为：" + isRight)
        if (isRight) {
          observer.next({ error: true, duplicated: true });
        } else if (isRight) {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

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
