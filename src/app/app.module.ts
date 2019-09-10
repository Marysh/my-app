import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RequestComponent} from './request/request.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {TodoComponent} from './todo/todo.component';
import {TableComponent} from './todo/table/table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {EditingRowComponent} from './editing-row/editing-row.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
  }
  // { path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    PageNotFoundComponent,
    TodoComponent,
    TableComponent,
    EditingRowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
