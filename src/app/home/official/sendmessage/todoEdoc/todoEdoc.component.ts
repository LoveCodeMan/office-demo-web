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
  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  listData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  editCache: { [key: string]: any } = {}


  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listData.push({
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
    this.updateListData()
  }

  updateListData() {
    this.listData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      }
    })
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listData[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.listData.findIndex(item => item.id === id);
    Object.assign(this.listData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }
}