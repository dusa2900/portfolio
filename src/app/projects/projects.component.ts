import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public s1:string= "assets/images/card.JPG";
  public s2:string= "assets/images/soft.JPG";
  public s3:string= "assets/images/bank.JPG";

  constructor() { }

  ngOnInit(): void {
  }

}
