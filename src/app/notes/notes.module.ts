import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent,
        NoteDetailsComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    providers: [
        NotesService
    ],
})
export class NotesModule {}
