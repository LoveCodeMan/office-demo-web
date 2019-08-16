import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private modalService: NzModalService, private activedRoute: ActivatedRoute) { }
  username = ''

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    // console.log("username的值为：" + this.username)
    // this.router.navigate(['home/index'])
  }

  exit() {
    this.modalService.confirm({
      nzTitle: '是否确认退出',
      nzContent: '<i nz-icon nzType="exclamation-circle" nzTheme="outline"></i>',
      nzOkText: '确认',
      nzOkType: 'danger',
      nzOnOk: () => this.router.navigate(['login']),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  fullscreen() {
    let element = document.documentElement
    element.requestFullscreen();
  }
}
