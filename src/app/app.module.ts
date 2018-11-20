import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { EventHistoryComponent } from './event-history/event-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RequestAdminComponent } from './request-admin/request-admin.component';
import { MemberReportsComponent } from './member-reports/member-reports.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'eventcreate', component: EventCreationComponent },
  { path: 'history', component: EventHistoryComponent},
  { path: 'analysefeedbacks', component:FeedbacksComponent},
  { path: 'memberList', component:MemberListComponent},
  { path: 'requestAdmin', component:RequestAdminComponent},
  { path: 'memberReports', component:MemberReportsComponent},
  { path: 'homepage', component:HomeComponent}, 
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
   // routingComponent,
    EventCreationComponent,
    AdminComponent,
    EventHistoryComponent,
    PageNotFoundComponent,
    FeedbacksComponent,
    MemberListComponent,
    RequestAdminComponent,
    MemberReportsComponent,
    HomeComponent  
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
