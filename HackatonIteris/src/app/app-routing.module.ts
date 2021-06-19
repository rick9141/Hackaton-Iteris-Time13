import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './components/template/menu-template/menu-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContatosEmergenciaComponent } from './components/template/contatos-emergencia/contatos-emergencia.component';


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
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
