import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { NoteDetailsControlsComponent } from './note-details-controls/note-details-controls.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent,
        NoteDetailsComponent,
        ControlBarComponent,
        NoteDetailsControlsComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        SharedModule
    ],
    providers: [
        NotesService
    ],
})
export class NotesModule {}
