import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from '../mobileform/mobileform.component';

@Component({
  selector: 'app-mobilelist',
  templateUrl: './mobilelist.component.html',
  styleUrls: ['./mobilelist.component.scss']
})
export class MobilelistComponent implements OnInit {

  @Input() mobile!: Array<IMobile>;

  constructor() {}

  ngOnInit(): void {}
}
