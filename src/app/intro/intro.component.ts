import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public imgSrc:string= "assets/images/gou2.JPG";

  constructor() { }

  ngOnInit(): void {
  }

}
