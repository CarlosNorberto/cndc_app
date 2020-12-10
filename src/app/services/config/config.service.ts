import { Injectable } from '@angular/core';
import { modelConfig } from './config-model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public envGlobal:modelConfig;
  private envGlobalSubject:BehaviorSubject<modelConfig>=new BehaviorSubject<modelConfig>(null);

  constructor(
    private _http:HttpClient
  ){}

  loadEnvironment():any{
    return this._http.get('../../../assets/env-specific.json').toPromise()
    .then(res=>res);
  }

  public setGlobal(es:modelConfig){
    this.envGlobal=es;
    if(this.envGlobalSubject){
      this.envGlobalSubject.next(this.envGlobal);
    }
  }
}
