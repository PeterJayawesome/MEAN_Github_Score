import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-show/github-search/github-search.component';
import { GithubShowComponent } from './github-show/github-show.component';
import { GithubResultComponent } from './github-show/github-result/github-result.component';
import { GitscoreService } from './github-show/gitscore.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubShowComponent,
    GithubSearchComponent,
    GithubResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
