import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  public showNavbar:boolean;


  ngOnInit(): void {
    this.showNavbar=false;
    
  }

  public nav(): void{
   /* if(this.showNavbar === false)
    {
      this.showNavbar=true;
    }else
    {
      this.showNavbar=false;
    } */
    this.showNavbar=this.showNavbar ===false? true: false;
  }
}
