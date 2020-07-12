import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes/notes.component";
import { NotesService } from './notes.service';
import { NoteComponent } from './note/note.component';

@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        NotesService
    ]
})
export class NotesModule {}
