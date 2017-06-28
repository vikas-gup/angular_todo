import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, JsonpModule } from '@angular/http';
import { routes } from './app.router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './about/help/help.component';
import { DetailComponent } from './about/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    AboutComponent,
    HelpComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routes
  ],
  providers: [
        {
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
