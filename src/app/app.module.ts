import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    // Agrega otros módulos necesarios
  ],
  exports: [AppNavBarComponent],
  bootstrap: [AppComponent] // Asegúrate de cambiar 'AppComponent' al nombre de tu componente principal
})