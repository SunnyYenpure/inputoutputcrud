import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboaredComponent } from './shared/componant/todo-dashboared/todo-dashboared.component';
import { TodoFormComponent } from './shared/componant/todo-form/todo-form.component';
import { TodoListComponent } from './shared/componant/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { MobiledashboardComponent } from './shared/componant/mobiledashboard/mobiledashboard.component';
import { MobileformComponent } from './shared/componant/mobileform/mobileform.component';
import { MobilelistComponent } from './shared/componant/mobilelist/mobilelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboaredComponent,
    TodoFormComponent,
    TodoListComponent,
    MobiledashboardComponent,
    MobileformComponent,
    MobilelistComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
