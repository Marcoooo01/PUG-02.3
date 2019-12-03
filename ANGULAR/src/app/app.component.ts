import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { castelliM } from './castelliM.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  c: string[];
  castell : castelliM[];
  oFoo : Observable<castelliM[]>;
  data: Object;
  constructor(public http: HttpClient) { }


    ngOnInit(): void {
      this.oFoo = this.http.get<castelliM[]>('https://3000-b7ad4af5-04dd-4fb9-beeb-27c7a8a0e1ee.ws-eu01.gitpod.io/api/castelli');
      this.oFoo.subscribe(data => {this.castell = data;}
        );
    }
}
