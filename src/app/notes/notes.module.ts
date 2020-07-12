import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes/notes.component";
import { NotesService } from './notes.service';

@NgModule({
    declarations: [
        NotesComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        NotesService
    ]
})
export class NotesModule {}
