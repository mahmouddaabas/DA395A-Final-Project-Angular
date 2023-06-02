import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchInformationPageComponent } from './components/search-information-page/search-information-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search/:query', component: SearchPageComponent },
  { path: 'information/:query', component: SearchInformationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

