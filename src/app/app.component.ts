import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable, Subscription, identity } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private soc: any;
  public title = 'front-end';
  public accesos:any[]=[];

  ngOnInit() {
    this.soc = socketIo("http://localhost:3000");

    this.getAccesos().subscribe(acceso => {
      this.accesos=[];
      this.accesos.unshift(acceso);
    });

  }

  getAccesos(): Observable<any> {
    return new Observable<any>(observer => {
      this.soc.on('get-accesos', acceso => {
        observer.next(acceso);
      })
    })
  }

}
