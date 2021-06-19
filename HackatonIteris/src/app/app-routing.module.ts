import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './components/template/menu-template/menu-template.component';
import { HomePageComponent } from './components/template/home-page/home-page.component';
import { SobrePageComponent } from './components/template/sobre-page/sobre-page.component';


const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'sobre',
      component: SobrePageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
