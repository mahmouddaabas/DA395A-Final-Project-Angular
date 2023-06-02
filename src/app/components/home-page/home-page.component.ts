import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  constructor(private http: HttpClient, private router: Router) { }

  searchArtist() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const keyword = input.value;
    // Make the API call using HttpClient
    this.http.get<any>(`https://api.genius.com/search?q=${keyword}&access_token=${environment.access_token}`)
      .subscribe((response) => {
        // Handle the API response here
        console.log(response);
        this.router.navigateByUrl(`/search/${keyword}`, { state: { searchData: response.response.hits } });
      });

      //console.log(this.data.response.hits)
      //console.log(environment.access_token)

  }
}
