import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bresc-recepten',
  templateUrl: './recepten.component.html',
  styleUrls: ['./recepten.component.css']
})
export class ReceptenComponent implements OnInit {
  slides = [
    {img: 'src/assets/images/DSC09789.jpg'},
    {img: 'src/assets/images/DSC09789.jpg'},
    {img: 'src/assets/images/DSC09789.jpg'},
    {img: 'src/assets/images/DSC09789.jpg'}
  ];

  constructor() {

  }

  ngOnInit() {
    this.addSlide();
  }

  addSlide() {
    this.slides.push({img: 'assest/images/logo.png'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
