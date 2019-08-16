import { Component, OnInit } from '@angular/core'

export interface Data {
  id: number;
  title: string;
  review: string;
  degree: string;
  number: string;
  state: string;
  wroteTime: string;
  arriveTime: string;
  send: string;
  event: string;
  callBack: boolean;
  emergency: boolean;
  overTime: boolean;
}


@Component({
  selector: 'app-todoEdoc',
  templateUrl: './todoEdoc.component.html',
  styleUrls: ['./todoEdoc.component.css']
})

export class TodoEdocComponent implements OnInit {
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  listOfAllData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        title: '浪潮云2.0',
        review: '预览',
        degree: '1',
        number: '00001',
        state: '环节1',
        wroteTime: '2019-1-12',
        arriveTime: '2019-3-12',
        send: 'zack',
        event: '业务',
        callBack: true,
        emergency: true,
        overTime: false
      });
    }
  }
}