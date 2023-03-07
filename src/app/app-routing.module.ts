import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: HomeComponent},
  {path: 'capitulos', component: CapitulosComponent},
  {path: 'spinner', component: SpinnerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
