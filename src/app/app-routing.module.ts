import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: 'signup', component: SignUpComponent},
  { path: 'search', component: SearchMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
