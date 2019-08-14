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
      time: '2018-7-7'
    },
    {
      event: '待办事项_2',
      time: '2018-7-8'
    },
    {
      event: '待办事项_3',
      time: '2018-7-9'
    },
    {
      event: '待办事项_4',
      time: '2018-7-10'
    }
  ];
  ngOnInit() {
  }

  alert() {
    alert('1')
  }
}