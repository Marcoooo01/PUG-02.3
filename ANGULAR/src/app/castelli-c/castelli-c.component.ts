import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { castelliM } from './castelliM.model';
@Component({
  selector: 'app-castelli-c',
  templateUrl: './castelli-c.component.html',
  styleUrls: ['./castelli-c.component.css']
})
export class CastelliCComponent {
  c: string[];
  castell : castelliM[];
  oFoo : Observable<castelliM[]>;
  data: Object;
  constructor(public http: HttpClient) { }

  makeTypedRequest() : void
  {
    this.oFoo = this.http.get<castelliM[]>('https://3000-d1638ee2-6a43-496d-a413-af468aac1e96.ws-eu01.gitpod.io/api/castelli');
    this.oFoo.subscribe(data => {this.castell = data;});
  }

}
