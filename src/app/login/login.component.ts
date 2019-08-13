import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  isRight = false;

  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService, private service: LoginService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let account = this.validateForm.value;
    this.service.login(account).subscribe(datas => {
      this.isRight = datas;
      if (this.isRight) {
        this.message.success('登录成功', {
          nzDuration: 1000
        });
        this.router.navigate(['home'],{
          queryParams: {username: account.value.username}
        })
      } else {
        this.message.error('此用户不存在', {
          nzDuration: 1000
        });
      }
    })
  }

  register() {
    this.router.navigate(['register'])
  }
}
