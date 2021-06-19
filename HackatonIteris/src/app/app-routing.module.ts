import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './components/template/menu-template/menu-template.component';
import { ContatosEmergenciaComponent } from './components/template/contatos-emergencia/contatos-emergencia.component';
import { HomePageComponent } from './components/template/home-page/home-page.component';
import { SobrePageComponent } from './components/template/sobre-page/sobre-page.component';
import { MenuHomeComponent } from './components/template/menu-home/menu-home.component';


const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'Contato',
      component: ContatosEmergenciaComponent
    },
    {
      path: 'sobre',
      component: SobrePageComponent
    },
    {
      path: 'Home',
      component: MenuHomeComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
