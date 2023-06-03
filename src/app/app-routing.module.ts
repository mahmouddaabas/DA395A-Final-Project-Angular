import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchInformationPageComponent } from './components/search-information-page/search-information-page.component';
import { SavedSongsPageComponent } from './components/saved-songs-page/saved-songs-page.component';

const routes: Routes = [
  { path: 'https://mahmouddaabas.github.io/DA395A-Final-Project-Angular/', component: HomePageComponent },
  { path: 'https://mahmouddaabas.github.io/DA395A-Final-Project-Angular/search/:query', component: SearchPageComponent },
  { path: 'https://mahmouddaabas.github.io/DA395A-Final-Project-Angular/information/:query', component: SearchInformationPageComponent},
  { path: 'https://mahmouddaabas.github.io/DA395A-Final-Project-Angular/saved', component: SavedSongsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

