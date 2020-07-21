import { Injectable } from '@angular/core';
import appSettings from '../../assets/app-settings.json';
import { Observable } from 'rxjs';

@Injectable()
export class AppSettingsService {
    public getDefaultUrl(): string {
        return appSettings.host;
    }
}
