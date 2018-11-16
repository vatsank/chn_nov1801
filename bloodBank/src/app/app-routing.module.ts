import { ShowDonarsComponent } from './show-donars/show-donars.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { FindDonarComponent } from './find-donar/find-donar.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ContentComponent},
  {path: 'findDonar', component: FindDonarComponent},
  {path: 'donar', component: ShowDonarsComponent},
  {path: 'donar/:id', component: ShowDonarsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'camps', component: CampDetailsComponent},
  {path: 'request', component: ManageRequestComponent},
  {path: '**', redirectTo: 'login'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
