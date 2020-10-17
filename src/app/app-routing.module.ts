import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { HomeComponent } from './home/home.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: '', redirectTo: 'newspapers', pathMatch: 'full' },
  { path: 'newspaper', component: NewspaperListComponent },
  { path: 'add', component: AddNewspaperComponent },
  { path: 'update/:name', component: UpdateNewspaperComponent },
  { path: '', redirectTo: 'magazines', pathMatch: 'full' },
  { path: 'magazine', component: MagazineListComponent },
  { path: 'add-magazine', component: AddMagazineComponent },
  { path: 'update-magazine/:name', component: UpdateMagazineComponent },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
