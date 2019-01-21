import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPostComponent } from './user-post/user-post.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { PractHttpComponent } from './pract-http/pract-http.component';
import { HeaderComponent } from './header/header.component';
import {Routes ,  RouterModule} from '@angular/router';

const appRoutes : Routes = [
  {path : '' , component : UserPostComponent},
  {path : 'td' , component : TDFormComponent  },
  {path : 'rd' , component :ReactiveFormComponent },
  {path : 'Practhttp'  , component: PractHttpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TDFormComponent,
    ReactiveFormComponent,
    UserPostComponent,
    PractHttpComponent,
    HeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
