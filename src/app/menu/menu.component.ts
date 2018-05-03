import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[]= [
    { display: "Home", route: "/home", tooltip: "Home Page"}
    ,{ display: "Users", route: "/users/list", tooltip: "User List Page"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
