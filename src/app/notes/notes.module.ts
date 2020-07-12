import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes/notes.component";
import { NotesService } from './notes.service';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent,
        NoteDetailsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    providers: [
        NotesService
    ]
})
export class NotesModule {}
