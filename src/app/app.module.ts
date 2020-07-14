import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotesModule } from './notes/notes.module';
import { InMemoryNotesDbService } from './in-memory-notes-db.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryNotesDbService),
        NotesModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
