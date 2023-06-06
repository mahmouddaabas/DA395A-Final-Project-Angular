import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-information-page',
  templateUrl: './search-information-page.component.html',
  styleUrls: ['./search-information-page.component.css']
})
export class SearchInformationPageComponent {
  songData: any; //Declare variable to hold data from state

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    //Set the data sent from the search-page through the state into the songData variable.
    this.songData = this.router.getCurrentNavigation()?.extras?.state?.['songData'];
  }

  //Render the description text.
  renderDescription(songData: any): string {
    const extractText = (children: any[]): string[] =>
      children.reduce((result: string[], child: any) => {
        if (typeof child === 'string') {
          return [...result, child];
        } else if (child.children) {
          return [...result, ...extractText(child.children)];
        }
        return result;
      }, []);

    const description = songData.description?.dom.children
      .filter((element: any) => element.tag === 'p' || element.tag === 'blockquote')
      .flatMap((element: any) => extractText(element.children));

    return description.join('').trim();
  }

  //Sanitize the apple music url.
  getApplePlayerUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.songData.apple_music_player_url);
  }

  //Changes the youtube URl from watch to embed.
  changeYoutubeUrlToEmbed() {
    let url = this.songData.media[0].url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace('/watch?v=', '/embed/'));
  }

}