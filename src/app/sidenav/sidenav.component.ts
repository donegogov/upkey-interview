import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() itemEventUsername = new EventEmitter<string>();
  userNames: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.userNames.push('Valentina Gogova');
    this.userNames.push('Blagoj Gogov');
    this.userNames.push('Vasil Gogov');
    this.userNames.push('Aleksandar Gjorgjiev');
    this.userNames.push('Vasko Mitrovski');
    this.userNames.push('All');
  }

  userName(value: string) {
    this.itemEventUsername.emit(value);
  }

}
