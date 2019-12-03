import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  c: string[];
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-a7dfb443-174b-45e7-a4a1-ffa8200f6530.ws-eu01.gitpod.io/api/castelli').subscribe(data => {
        // Read the result field from the JSON response.
        this.c = data['castells'];
      });
    }
}
