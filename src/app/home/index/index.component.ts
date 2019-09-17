import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  constructor(private router: Router) { }

  listData = [
    {
      event: '待办事项_1',
      time: '2018-7-7',
      type: 1
    },
    {
      event: '待办事项_2',
      time: '2018-7-8',
      type: 2
    },
    {
      event: '待办事项_3',
      time: '2018-7-9',
      type: 3
    },
    {
      event: '待办事项_4',
      time: '2018-7-10',
      type: 4
    }
  ];
  ngOnInit() {
  }

  alert(data) {
    // alert(data.event + ' ' + data.time)
    let type = data.type
    if (type === 1) {
      alert('这是' + type + '类型')
    } else if (type === 2) {
      alert('这是' + type + '类型')
    } else if (type === 3) {
      alert('这是' + type + '类型')
    } else if (type === 4) {
      alert('这是' + type + '类型')
    }
  }

  sendEdoc() {
    alert('公文分发')
  }

  receiveEdoc() {
    alert('签收公文')
  }

  signEdoc() {
    alert('登记收文')
  }

  addEdoc() {
    alert('新建签报')
  }

  completeEdoc() {
    alert('已办发文')
  }
}