import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { FullWidthAdsComponent } from './components/full-width-ads/full-width-ads.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { ImageComponent } from './components/image/image.component';
import { AsideNewsLayoutComponent } from './components/layouts/aside-news-layout/aside-news-layout.component';
import { MacroNewsLayoutIComponent } from './components/layouts/macro-news-layout-i/macro-news-layout-i.component';
import { MacroNewsLayoutIiComponent } from './components/layouts/macro-news-layout-ii/macro-news-layout-ii.component';
import { WideColumnsSectionComponent } from './components/layouts/wide-columns-section/wide-columns-section.component';
import { WideHighlightSectionComponent } from './components/layouts/wide-highlight-section/wide-highlight-section.component';
import { WideNewsSectionIComponent } from './components/layouts/wide-news-section-i/wide-news-section-i.component';
import { NewsItemBookmarkComponent } from './components/news-item-bookmark/news-item-bookmark.component';
import { NewsItemVariantIComponent } from './components/news-item-variant-i/news-item-variant-i.component';
import { NewsItemVariantIiComponent } from './components/news-item-variant-ii/news-item-variant-ii.component';
import { NewsItemVariantIiiComponent } from './components/news-item-variant-iii/news-item-variant-iii.component';
import { NewsItemVariantIvComponent } from './components/news-item-variant-iv/news-item-variant-iv.component';
import { NewsItemVariantVComponent } from './components/news-item-variant-v/news-item-variant-v.component';
import { NewsItemVariantViComponent } from './components/news-item-variant-vi/news-item-variant-vi.component';
import { NewsItemVariantViiComponent } from './components/news-item-variant-vii/news-item-variant-vii.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { PaidPostComponent } from './components/paid-post/paid-post.component';
import { DebugDirective } from './directives/debug.directive';
import { BlankComponent } from './layouts/blank/blank.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DurationElapsedPipe } from './pipes/duration-elapsed.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AboutComponent } from './views/about/about.component';
import { AskStoriesComponent } from './views/ask-stories/ask-stories.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { FavouritesComponent } from './views/favourites/favourites.component';
import { HomeComponent } from './views/home/home.component';
import { IndividualComponent } from './views/individual/individual.component';
import { JobStoriesComponent } from './views/job-stories/job-stories.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RandomStoriesComponent } from './views/random-stories/random-stories.component';
import { ReadLaterComponent } from './views/read-later/read-later.component';
import { ShowStoriesComponent } from './views/show-stories/show-stories.component';
import { TopStoriesComponent } from './views/top-stories/top-stories.component';

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
        WideNewsSectionIComponent,
        ReadLaterComponent,
        DefaultComponent,
        BlankComponent,
        RandomStoriesComponent,
        NewsItemBookmarkComponent,
        NotFoundComponent,
        DebugDirective,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
