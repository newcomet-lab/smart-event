import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {



  }

}