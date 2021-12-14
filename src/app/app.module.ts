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

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidebarComponent, FooterComponent, NewsItemComponent, TopStoriesComponent, AskStoriesComponent, ShowStoriesComponent, JobStoriesComponent, FaqsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
