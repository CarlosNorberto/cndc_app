import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable, Subscription, identity } from 'rxjs';
import { ConfigService } from '../../services/config/config.service';
import * as screenfull from 'screenfull';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private soc: any;
	public title = 'front-end';
	public accesos: any[] = [];
	public url: string;
	public server:string;
	public themes: any[] = [
		{ id: 1, color: '#fff' },
		{ id: 2, color: '#000' }
	]

	@ViewChild('content') content: ElementRef;

	constructor(
		private _serviceConfig: ConfigService,
		private renderer: Renderer2,
		private el: ElementRef
	) {
		// this.url = this._serviceConfig.envGlobal.url;
		// this.url = "http://localhost:3000/api/";
		// this.server="http://localhost:3000";
		this.url = "http://192.168.2.210:3000/api/";
		this.server="http://192.168.2.210:3000";
	}

	ngOnInit() {
		this.soc = socketIo(this.server);

		this.getAccesos().subscribe(acceso => {
			this.accesos = [];
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

	changeTheme(id: number) {
		if (id == 1) {
			this.renderer.setStyle(this.content.nativeElement, 'background-color', '#fff');
			this.renderer.setStyle(this.content.nativeElement, 'color', '#000');
		} else {
			this.renderer.setStyle(this.content.nativeElement, 'background-color', '#000');
			this.renderer.setStyle(this.content.nativeElement, 'color', '#fff');
		}
	}

	full() {
		if (screenfull.isEnabled) {
			screenfull.toggle();
		}
	}


}
