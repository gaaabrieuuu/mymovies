import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full',
    title: "MyMovies - Home"
  },
  {
    path: "home",
    component: HomeComponent,
    title: "MyMovies - Home",
  },
  {
    path: "details",
    component: DetailsComponent,
    title: "MyMovies - Details"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    title: "MyMovies - Not Found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
