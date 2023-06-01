import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  constructor(private http: HttpClient) { }

   data = {
    "meta": {
      "status": 200
    },
    "response": {
      "hits": [
        {
          "highlights": [],
          "index": "song",
          "type": "song",
          "result": {
            "annotation_count": 0,
            "api_path": "/songs/1941496",
            "artist_names": "Elissa - إليسا",
            "full_title": "Abaly Habeby | ع بالي حبيبي by Elissa - إليسا",
            "header_image_thumbnail_url": "https://images.genius.com/2eae2a38cbcb92a3f6fc298690508092.300x300x1.png",
            "header_image_url": "https://images.genius.com/2eae2a38cbcb92a3f6fc298690508092.1000x1000x1.png",
            "id": 1941496,
            "language": "ar",
            "lyrics_owner_id": 3758128,
            "lyrics_state": "complete",
            "path": "/Elissa-abaly-habeby-lyrics",
            "pyongs_count": null,
            "relationships_index_url": "https://genius.com/Elissa-abaly-habeby-sample",
            "release_date_components": {
              "year": 2009,
              "month": 12,
              "day": 26
            },
            "release_date_for_display": "December 26, 2009",
            "release_date_with_abbreviated_month_for_display": "Dec. 26, 2009",
            "song_art_image_thumbnail_url": "https://images.genius.com/2eae2a38cbcb92a3f6fc298690508092.300x300x1.png",
            "song_art_image_url": "https://images.genius.com/2eae2a38cbcb92a3f6fc298690508092.1000x1000x1.png",
            "stats": {
              "unreviewed_annotations": 0,
              "hot": false,
              "pageviews": 11917
            },
            "title": "Abaly Habeby | ع بالي حبيبي",
            "title_with_featured": "Abaly Habeby | ع بالي حبيبي",
            "url": "https://genius.com/Elissa-abaly-habeby-lyrics",
            "featured_artists": [],
            "primary_artist": {
              "api_path": "/artists/262238",
              "header_image_url": "https://images.genius.com/63ff5d1cb8e715dc092d823254b9b224.1000x333x1.jpg",
              "id": 262238,
              "image_url": "https://images.genius.com/0cdfb771d214dad743d36f3f0e1a6c58.1000x1000x1.png",
              "is_meme_verified": false,
              "is_verified": false,
              "name": "Elissa - إليسا",
              "url": "https://genius.com/artists/Elissa"
            }
          }
        },
        {
          "highlights": [],
          "index": "song",
          "type": "song",
          "result": {
            "annotation_count": 0,
            "api_path": "/songs/2069823",
            "artist_names": "Elissa - إليسا",
            "full_title": "Ayami Bik | أيامي بيك by Elissa - إليسا",
            "header_image_thumbnail_url": "https://images.genius.com/040c09ce5af95fdcb5d148fe2db788a8.300x300x1.png",
            "header_image_url": "https://images.genius.com/040c09ce5af95fdcb5d148fe2db788a8.600x600x1.png",
            "id": 2069823,
            "language": "ar",
            "lyrics_owner_id": 13579297,
            "lyrics_state": "complete",
            "path": "/Elissa-ayami-bik-lyrics",
            "pyongs_count": 1,
            "relationships_index_url": "https://genius.com/Elissa-ayami-bik-sample",
            "release_date_components": {
              "year": 2007,
              "month": 12,
              "day": 18
            },
            "release_date_for_display": "December 18, 2007",
            "release_date_with_abbreviated_month_for_display": "Dec. 18, 2007",
            "song_art_image_thumbnail_url": "https://images.genius.com/040c09ce5af95fdcb5d148fe2db788a8.300x300x1.png",
            "song_art_image_url": "https://images.genius.com/040c09ce5af95fdcb5d148fe2db788a8.600x600x1.png",
            "stats": {
              "unreviewed_annotations": 0,
              "hot": false
            },
            "title": "Ayami Bik | أيامي بيك",
            "title_with_featured": "Ayami Bik | أيامي بيك",
            "url": "https://genius.com/Elissa-ayami-bik-lyrics",
            "featured_artists": [],
            "primary_artist": {
              "api_path": "/artists/262238",
              "header_image_url": "https://images.genius.com/63ff5d1cb8e715dc092d823254b9b224.1000x333x1.jpg",
              "id": 262238,
              "image_url": "https://images.genius.com/0cdfb771d214dad743d36f3f0e1a6c58.1000x1000x1.png",
              "is_meme_verified": false,
              "is_verified": false,
              "name": "Elissa - إليسا",
              "url": "https://genius.com/artists/Elissa"
            }
          }
        }
      ]
    }
  }

  searchArtist() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const keyword = input.value;
    // Make the API call using HttpClient
    /*this.http.get(`https://api.genius.com/search?q=${keyword}&access_token=environment.access_token`)
      .subscribe((response) => {
        // Handle the API response here
        console.log(response);
      });*/

      console.log(this.data.response.hits)
      console.log(environment.access_token)
  }
}
