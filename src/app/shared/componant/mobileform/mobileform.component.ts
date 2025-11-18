import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface IMobile {
  mobileitem: string;
  mobileid: string;
}

@Component({
  selector: 'app-mobileform',
  templateUrl: './mobileform.component.html',
  styleUrls: ['./mobileform.component.scss'],
})
export class MobileformComponent implements OnInit {

  @Output() emitmobile = new EventEmitter<IMobile>();

  constructor() {}

  ngOnInit(): void {}

  onmobileadd(form: NgForm) {
    let obj: IMobile = {
      ...form.value,
      mobileid: this.uuid(),
    };

    this.emitmobile.emit(obj);

    form.reset();
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
