import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todoEdoc',
  templateUrl: './todoEdoc.component.html',
  styleUrls: ['./todoEdoc.component.css']
})

export class TodoEdocComponent implements OnInit {
  constructor() { }
  listOfData: any[] = []

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }
}