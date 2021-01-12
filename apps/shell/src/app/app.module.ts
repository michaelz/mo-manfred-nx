import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlightsModule } from '../../../mfe1/src/app/flights/flights.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES),
		FlightsModule
	],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
