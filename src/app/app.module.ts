import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { TopStoriesComponent } from './views/top-stories/top-stories.component';
import { AskStoriesComponent } from './views/ask-stories/ask-stories.component';
import { ShowStoriesComponent } from './views/show-stories/show-stories.component';
import { JobStoriesComponent } from './views/job-stories/job-stories.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { IndividualComponent } from './views/individual/individual.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DurationElapsedPipe } from './pipes/duration-elapsed.pipe';
import { FavouritesComponent } from './views/favourites/favourites.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './views/auth/signup/signup.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { NewsItemVariantIComponent } from './components/news-item-variant-i/news-item-variant-i.component';
import { NewsItemVariantIiComponent } from './components/news-item-variant-ii/news-item-variant-ii.component';
import { NewsItemVariantIiiComponent } from './components/news-item-variant-iii/news-item-variant-iii.component';
import { NewsItemVariantIvComponent } from './components/news-item-variant-iv/news-item-variant-iv.component';
import { FullWidthAdsComponent } from './components/full-width-ads/full-width-ads.component';
import { NewsItemVariantVComponent } from './components/news-item-variant-v/news-item-variant-v.component';
import { NewsItemVariantViComponent } from './components/news-item-variant-vi/news-item-variant-vi.component';
import { PaidPostComponent } from './components/paid-post/paid-post.component';
import { NewsItemVariantViiComponent } from './components/news-item-variant-vii/news-item-variant-vii.component';
import { WideHighlightSectionComponent } from './components/layouts/wide-highlight-section/wide-highlight-section.component';
import { WideColumnsSectionComponent } from './components/layouts/wide-columns-section/wide-columns-section.component';
import { MacroNewsLayoutIComponent } from './components/layouts/macro-news-layout-i/macro-news-layout-i.component';
import { ImageComponent } from './components/image/image.component';
import { MacroNewsLayoutIiComponent } from './components/layouts/macro-news-layout-ii/macro-news-layout-ii.component';
import { AsideNewsLayoutComponent } from './components/layouts/aside-news-layout/aside-news-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        NewsItemComponent,
        TopStoriesComponent,
        AskStoriesComponent,
        ShowStoriesComponent,
        JobStoriesComponent,
        FaqsComponent,
        IndividualComponent,
        CommentsComponent,
        SafeHtmlPipe,
        DurationElapsedPipe,
        FavouritesComponent,
        LoginComponent,
        AboutComponent,
        SignupComponent,
        CarouselComponent,
        HeadlineComponent,
        NewsItemVariantIComponent,
        NewsItemVariantIiComponent,
        NewsItemVariantIiiComponent,
        NewsItemVariantIvComponent,
        FullWidthAdsComponent,
        NewsItemVariantVComponent,
        NewsItemVariantViComponent,
        PaidPostComponent,
        NewsItemVariantViiComponent,
        WideHighlightSectionComponent,
        WideColumnsSectionComponent,
        MacroNewsLayoutIComponent,
        ImageComponent,
        MacroNewsLayoutIiComponent,
        AsideNewsLayoutComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAnalytics(() => getAnalytics()), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
    providers: [
    ScreenTrackingService,UserTrackingService
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}
