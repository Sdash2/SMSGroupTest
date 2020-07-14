import { CityListComponent } from './components/city-list/city-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'city-list', pathMatch: 'full'
  },
  {
    path: 'city-list', component: CityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
