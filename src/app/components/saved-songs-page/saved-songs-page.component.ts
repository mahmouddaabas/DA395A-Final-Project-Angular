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

  deleteSongFromStoarge(event: Event){
    console.log("Remove from storage :D")
  }
}
