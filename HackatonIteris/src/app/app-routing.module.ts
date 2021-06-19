import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './components/template/menu-template/menu-template.component';
<<<<<<< HEAD
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContatosEmergenciaComponent } from './components/template/contatos-emergencia/contatos-emergencia.component';
=======
import { HomePageComponent } from './components/template/home-page/home-page.component';
import { SobrePageComponent } from './components/template/sobre-page/sobre-page.component';
>>>>>>> d54ebe2f6492c0569d669e3563c4bb56a9afefff


const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
<<<<<<< HEAD
      path: 'Contato',
      component: ContatosEmergenciaComponent
    },
=======
      path: 'sobre',
      component: SobrePageComponent
    }
>>>>>>> d54ebe2f6492c0569d669e3563c4bb56a9afefff
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
