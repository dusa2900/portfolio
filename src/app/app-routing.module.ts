import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/intro',
    pathMatch:'full'
  }, 
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  }, {
    path:'skills',
    component:SkillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
