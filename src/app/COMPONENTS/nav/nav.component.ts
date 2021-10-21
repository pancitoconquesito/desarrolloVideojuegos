import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeId:number=0;
  dimImg:number=50;

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(n:number):void{
    this.activeId=n;
  }
}
