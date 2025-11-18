import { Component, OnInit } from '@angular/core';
import { IMobile } from '../mobileform/mobileform.component';

@Component({
  selector: 'app-mobiledashboard',
  templateUrl: './mobiledashboard.component.html',
  styleUrls: ['./mobiledashboard.component.scss']
})
export class MobiledashboardComponent implements OnInit {

  mobilearray: Array<IMobile> = [
    {
      mobileitem: "Iphone",
      mobileid: "123",
    },
    {
      mobileitem: "Samsung",
      mobileid: "124",
    },
    {
      mobileitem: "Oneplus",
      mobileid: "125",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getnewmobilelist(mob: IMobile) {
    this.mobilearray.push(mob);
  }
}
