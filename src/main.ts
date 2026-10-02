import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import './app/components/news-item-variant-viii/news-item-variant-viii.element';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowser()
    .bootstrapModule(AppModule, {
        applicationProviders: [provideZoneChangeDetection()],
    })
    .catch(console.error);
