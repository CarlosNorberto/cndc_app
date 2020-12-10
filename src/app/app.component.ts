import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  ngOnInit(){
    // console.log(this.theme);
    // this.theme.style.setProperty('--monitorBackground','#900');
  }
}
