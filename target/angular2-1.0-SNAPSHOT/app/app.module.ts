import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {routing} from "./app.router";
import {HelloComponent} from "./hello/hello.component";
import {HiComponent} from "./hi/hi.component";
import {HomeComponent} from "./home/home.component";
@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, HiComponent, HelloComponent,HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}