import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG_DEV: AppConfig = {
    firebase: {
        projectId: dev.firebase.projectId,
        appId: dev.firebase.appId,
        storageBucket: dev.firebase.storageBucket,
        locationId: dev.firebase.locationId,
        apiKey: dev.firebase.apiKey,
        authDomain: dev.firebase.authDomain,
        messagingSenderId: dev.firebase.messagingSenderId,
        measurementId: dev.firebase.measurementId,
    },
    production: dev.production,
};

export const APP_CONFIG_PROD: AppConfig = {
    firebase: {
        projectId: prod.firebase.projectId,
        appId: prod.firebase.appId,
        storageBucket: prod.firebase.storageBucket,
        locationId: prod.firebase.locationId,
        apiKey: prod.firebase.apiKey,
        authDomain: prod.firebase.authDomain,
        messagingSenderId: prod.firebase.messagingSenderId,
        measurementId: prod.firebase.measurementId,
    },
    production: prod.production,
};

// This needs to registered in the appmodule's provider section
// To use it, add @Inject(APP_CONFIG_DEV) config: APP_CONFIG in constructor
