import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'app-pract-http',
  templateUrl: './pract-http.component.html',
  styleUrls: ['./pract-http.component.css'],
  providers:[DataService]
})
export class PractHttpComponent implements OnInit {
AppName = this.dataservice.getAppTitle();
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }

}
