import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public loading: boolean;

  constructor() { 

    this.loading=true;
  }

  ngOnInit(): void {
  }

}
