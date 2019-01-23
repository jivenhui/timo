import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bresc-recepten',
  templateUrl: './recepten.component.html',
  styleUrls: ['./recepten.component.css']
})
export class ReceptenComponent implements OnInit {
  @Input()
  recepten
  @Input()
  recept

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4, visibility: true};

  constructor() {
  }

  ngOnInit(): void {
    this.recept = this.recepten[0];
  }

  soepImageClick(recept) {
    this.recept = recept;
  }
}
