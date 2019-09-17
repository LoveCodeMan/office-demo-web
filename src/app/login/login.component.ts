import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LoginService } from './login.service';
import { Md5 } from 'ts-md5/dist/md5';
// declare var hex_md5: (password: string) => any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  isRight = false;
  username = "";
  password = "";
  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService, private service: LoginService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
    this.getCookie()
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let account = this.validateForm.value;
    let data = {
      username: '',
      password: null
    }
    data.username = account.username;
    let salt = "1#2$3%4(5)6@7!poeeww$3%4(5)djjkkldss";
    data.password = Md5.hashAsciiStr(account.password + "{" + salt + "}");
    this.service.login(data).subscribe(datas => {
      this.isRight = datas;
      if (this.isRight) {
        this.message.success('登录成功', {
          nzDuration: 1000
        });
        this.router.navigate(['home/index'])
        if (account.remember) {
          this.setCookie(account.username, account.password, 1)
        } else {
          this.clearCookie();
        }
        sessionStorage.setItem("username", account.username)
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

  setCookie(username, password, days) {
    let exdate = new Date();
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days);
    window.document.cookie = 'userName=' + username + ';path=/;expires=' + exdate.toUTCString();
    window.document.cookie = 'userPwd=' + password + ';path=/;expires=' + exdate.toUTCString();
  }

  getCookie() {
    if (document.cookie.length > 0) {
      let arr = document.cookie.split('; ');
      // console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=');
        // console.log(arr2)
        if (arr2[0] == 'userName') {
          this.username = arr2[1];
        } else if (arr2[0] == 'userPwd') {
          this.password = arr2[1];
        }
      }
    }
  }

  clearCookie() {
    this.setCookie('', '', -1);
  }
}
