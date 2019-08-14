import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-official',
  templateUrl: './offical.component.html',
  styleUrls: ['./official.component.css']
})

export class OfficialComponent implements OnInit {
  constructor(private router: Router) { }

   ngOnInit() {
  }
}