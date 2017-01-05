//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { cardComponent } from './card/card.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        ],
    declarations: [
        AppComponent,
        cardComponent
        ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
