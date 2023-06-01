import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {
  searchData: any; //Declare variable to hold data from state

  constructor(private router: Router, private http: HttpClient) {
    //Set the data sent from the home-page through the state into the searchData variable.
    this.searchData = this.router.getCurrentNavigation()?.extras?.state?.['searchData'];
  }

  getSongInformation(event: Event) {
    //Get the api path from the clicked li element.
    const apiPath = (event.target as HTMLElement).getAttribute('apipath');

    //Perform api call here with apipath.
    this.http.get(`https://api.genius.com${apiPath}?access_token=${environment.access_token}`)
      .subscribe((response) => {
        console.log(response);

        //Send data to song-information-page component
        //this.router.navigateByUrl(`/search/${keyword}`, { state: { searchData: this.data.response.hits } });

      });
  }
}
