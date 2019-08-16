import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-official',
  templateUrl: './offical.component.html',
  styleUrls: ['./official.component.css']
})

export class OfficialComponent implements OnInit {
  constructor(private router: Router) { }
  datalist = [
    {
      title: '发文管理',
      value: [
        {
          event: '新建公文',
          url: 'home/official/addEdoc'
        },
        {
          event: '新建公文JYB',
          url: 'home/official/addJYB'
        },
        {
          event: '待办发文',
          url: 'home/official/todoEdoc'
        },
        {
          event: '已办发文',
          url: '1-4'
        }, {
          event: '办结发文',
          url: '1-5'
        }, {
          event: '公文分发',
          url: '1-6'
        }, {
          event: '公文分发',
          url: '1-6'
        }, {
          event: '公文导入导出',
          url: '1-7'
        }, {
          event: '待阅发文',
          url: '1-8'
        }, {
          event: '流程监控',
          url: '1-9'
        }, {
          event: '我的缓办',
          url: '1-10'
        },
        {
          event: '我的关注',
          url: '1-11'
        }, {
          event: '催办工作',
          url: '1-12'
        }, {
          event: '我的加急',
          url: '1-13'
        }
      ]
    },
    {
      title: '收文管理',
      value: [
        {
          event: '签收公文',
          url: '2-1'
        },
        {
          event: '登记收文',
          url: '2-2'
        },
        {
          event: '待办收文',
          url: '2-3'
        }, {
          event: '已办收文',
          url: '2-3'
        }, {
          event: '办结收文',
          url: '2-4'
        }, {
          event: '收文收阅箱',
          url: '2-5'
        }, {
          event: '新建收文',
          url: '2-6'
        }, {
          event: '代签收列表',
          url: '2-7'
        },
      ]
    },
    {
      title: '待阅管理',
      value: []
    }, {
      title: '待办提醒',
      value: []
    }, {
      title: '签报公文',
      value: []
    }, {
      title: '内部审批',
      value: []
    }, {
      title: '公文打印管理',
      value: []
    }, {
      title: '公文归档',
      value: []
    }, {
      title: '公文设置',
      value: []
    }, {
      title: '公文查询',
      value: []
    }, {
      title: '公文统计',
      value: []
    }, {
      title: '公文销毁',
      value: []
    }, {
      title: '台账管理',
      value: []
    },
  ]

  index = 0;
  tabs = [];

  ngOnInit() {

  }

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  addTab(name,num): void {
    if (this.tabs.indexOf(name) === -1) {
      this.tabs.push(name);
      this.index = this.tabs.length - 1;
    }
  }

  showUrl(url) {
    this.router.navigate([url])
    console.log("该项的跳转地址为：" + url)
  }
}