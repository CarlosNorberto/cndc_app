import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigResolver } from './services/config/config-resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,resolve:{envResolve:ConfigResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
