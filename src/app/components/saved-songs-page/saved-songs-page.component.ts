import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-songs-page',
  templateUrl: './saved-songs-page.component.html',
  styleUrls: ['./saved-songs-page.component.css']
})
export class SavedSongsPageComponent {
  savedSongData: any; //Declare variable to hold data from state

  constructor(){
    this.savedSongData = JSON.parse(localStorage.getItem("savedSongs") ?? "[]");
  }

  //Deletes a song from the localStorage.
  deleteSongFromStoarge(event: Event){
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
}
