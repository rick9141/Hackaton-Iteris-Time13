import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuTemplateComponent } from './components/template/menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './components/template/home-page/home-page.component';
import { FooterComponent } from './components/template/footer/footer.component';
<<<<<<< HEAD
import { ContatosEmergenciaComponent } from './components/template/contatos-emergencia/contatos-emergencia.component';
=======
import { SobrePageComponent } from './components/template/sobre-page/sobre-page.component';
>>>>>>> d54ebe2f6492c0569d669e3563c4bb56a9afefff

@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    HomePageComponent,
    FooterComponent,
<<<<<<< HEAD
    ContatosEmergenciaComponent,
=======
    SobrePageComponent
>>>>>>> d54ebe2f6492c0569d669e3563c4bb56a9afefff
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
