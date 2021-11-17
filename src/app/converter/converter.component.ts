import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() { }
  c: any;
  f: any;
  ngOnInit() {}

  changed(value: any, type: any) {
    if (value) {
      if (type === 'c') {
        let feh = (value * 9 / 5) + 32;
        this.f = feh.toFixed(1);
      } else {
        let cel = (value - 32) * (5 / 9);
        this.c = cel.toFixed(1);
      }
    } else {
      this.c = null;
      this.f = null;
    }

  }
}
