import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { modelConfig } from './config-model';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigResolver implements Resolve<modelConfig> {

    constructor(private configService: ConfigService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<modelConfig> {
        return this.configService.loadEnvironment()
            .then(es => {                
                this.configService.setGlobal(es);
                return this.configService.envGlobal;
            })
            .catch(error => {
                return null;
            });
    }
}