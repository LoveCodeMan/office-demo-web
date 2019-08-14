import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-supervise',
  templateUrl: './supervise.component.html',
  styleUrls: ['./supervise.component.css']
})

export class SuperviseComponent implements OnInit {
  constructor(private router: Router) { }

   ngOnInit() {
  }
}