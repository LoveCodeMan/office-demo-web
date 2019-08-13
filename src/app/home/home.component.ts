import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router'
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
    this.activedRoute.queryParams.subscribe(queryParms =>{
      this.username = queryParms.username
      console.log("username得值为：" + this.username)
    })
  }

  exit() {
    this.modalService.confirm({
      nzTitle: '是否确认退出',
      nzOkText: '确认',
      nzOkType: 'danger',
      nzOnOk: () => this.router.navigate(['login']),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
