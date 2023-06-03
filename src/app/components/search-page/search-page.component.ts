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

  ngAfterViewInit() {
    const savedSongArray = JSON.parse(localStorage.getItem("savedSongs") ?? "[]");
    const list = document.getElementById('song-list') as HTMLElement;
    const liElements = list.getElementsByTagName('li');
    for (let i = 0; i < liElements.length; i++) {
      const li = liElements[i];
      let textContentRemoveAdd = li.textContent?.replaceAll("add", "");
      let textContentTrimmed = textContentRemoveAdd?.replace(" ", "").trim();
    }
  }
  
  
  

  //Saves the a song and its image to the local storage.
  addSongToStorage(event: Event) {
    const targetElement = event.target as HTMLElement;
    let songTitle = targetElement.closest('li')?.textContent;
    let songTitleRemoveAdd = songTitle?.replaceAll("add", "");
    let songTitleTrimmed = songTitleRemoveAdd?.replace(" ", "")
    const songImage = targetElement.closest('li')?.querySelector("img")?.getAttribute("src");
    const songApiPath = targetElement.closest('li')?.getAttribute("apipath")
    const songToSave = {
      songTitleTrimmed,
      songImage,
      songApiPath
    }

    //Get the saved songs from the storage, if there is none will init the array as []
    const savedSongArray = JSON.parse(localStorage.getItem("savedSongs") ?? "[]");
    savedSongArray.push(songToSave);
    localStorage.setItem("savedSongs", JSON.stringify(savedSongArray));

    targetElement.setAttribute("style", "pointer-events: none")
    targetElement.setAttribute('disabled', 'true');
    targetElement.style.color = 'gray'
  }

  getSongInformation(event: Event) {
    //Get the api path from the clicked li element.
    const apiPath = (event.target as HTMLElement).getAttribute('apipath');

    //Perform api call here with apipath.
    this.http.get<any>(`https://api.genius.com${apiPath}?access_token=${localStorage.getItem("api_key")}`)
      .subscribe((response) => {
        const urlQuery = response.response.song.path;

        //Send data to song-information-page component
        this.router.navigateByUrl(`/information${urlQuery}`, { state: { songData: response.response.song } });

      });
  }
}
