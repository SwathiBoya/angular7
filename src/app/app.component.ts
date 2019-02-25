import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

declare function myMethod(): any;
@Component({
  selector: 'swathi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7';
  ngOnInit(){
    myMethod();
  }
}
