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
  constructor(public http: HttpClient) {
    this.makeTypedRequest();
  }

  makeTypedRequest() : void
  {
    this.oFoo = this.http.get<castelliM[]>('https://3000-faf35fc3-fb58-4e8c-a965-e030c8f4e597.ws-eu01.gitpod.io/api/castelli');
    this.oFoo.subscribe(data => {this.castell = data['castells'];});
  }

}
