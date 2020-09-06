import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public s1: string= "assets/images/gou1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
