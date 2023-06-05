import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'env';

@Component({
  selector: 'app-saved-songs-page',
  templateUrl: './saved-songs-page.component.html',
  styleUrls: ['./saved-songs-page.component.css']
})
export class SavedSongsPageComponent {
  savedSongData: any; //Declare variable to hold data from state

  constructor(private router: Router,private http: HttpClient) {
    this.savedSongData = JSON.parse(localStorage.getItem("savedSongs") ?? "[]");
  }

  //Deletes a song from the localStorage.
  deleteSongFromStoarge(event: Event) {
    //Remove from HTML List
    const liToRemove = (event.currentTarget as HTMLElement).parentElement!;
    const list = document.getElementById("song-list");
    list?.removeChild(liToRemove);
    const songTitle = liToRemove.textContent?.replace("delete", "").trim();
    //console.log(songTitle);

    //Remove from Localstorage.
    const savedSongsArray = JSON.parse(localStorage.getItem("savedSongs") || '[]');
    const indexToRemove = savedSongsArray.findIndex((song: any) => song.songTitleTrimmed === songTitle); //song.songTitleTrimmed is the value in the localStorage.
    //Remove the song and update the song array in the local storage.
    if (indexToRemove !== -1) {
      savedSongsArray.splice(indexToRemove, 1);
      localStorage.setItem("savedSongs", JSON.stringify(savedSongsArray));
    }
  }

  //Perform an api call once a saved song is clicked and navigate to the information page.
  getSongInformation(event: Event) {
    const apiPath = (event.currentTarget as HTMLElement).getAttribute("apipath");
    //Perform api call here with apipath.
    this.http.get<any>(`https://api.genius.com${apiPath}?access_token=${environment.access_token}`)
      .subscribe((response) => {
        const urlQuery = response.response.song.path;

        //Send data to song-information-page component
        this.router.navigateByUrl(`/information${urlQuery}`, { state: { songData: response.response.song } });
      });
  }
}
