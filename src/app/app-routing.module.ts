import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "",component:PrincipalComponent ,pathMatch:"full"},
  {path: "component", component: AppComponent, pathMatch: "full" },
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"register", component:RegisterComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
