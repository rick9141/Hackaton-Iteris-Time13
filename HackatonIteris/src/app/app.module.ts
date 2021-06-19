import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './components/template/home-page/home-page.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContatosEmergenciaComponent } from './components/template/contatos-emergencia/contatos-emergencia.component';
import { SobrePageComponent } from './components/template/sobre-page/sobre-page.component';
import { LegislacaoPageComponent } from './components/template/legislacao-page/legislacao-page.component';
import { LegislacaoViewComponent } from './components/template/legislacao-view/legislacao-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    HomePageComponent,
    FooterComponent,
    ContatosEmergenciaComponent,
    SobrePageComponent,
    LegislacaoPageComponent,
    LegislacaoViewComponent,
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
    MatListModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
