import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  addApiKey(){
    let apiKey = prompt("Enter your API Key") || '';
    localStorage.setItem("api_key", apiKey)
  }
}
