import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdComponentsModule } from './md-components.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { environment } from 'src/environments/environment';
import { FeedbackService } from './feedback.service';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TeamComponent,
    EventsComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventsComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'payments', component: PaymentsComponent },
    ]),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'smhouse-feedbacks'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdComponentsModule
    
  ],
  providers: [
    FeedbackService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
