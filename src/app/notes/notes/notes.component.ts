import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NotesService } from "../notes.service";
import { Note } from '../entities/note';

@Component({
    selector: "app-notes",
    templateUrl: "./notes.component.html",
    styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
    public notes: Note[] = [];

    constructor(private notesService: NotesService) {}

    ngOnInit(): void {
        this.getNotes();
    }

    private getNotes(): void {
        this.notesService.getNotes().subscribe((notes: Note[]) => {
            this.notes = notes;
        });
    }
}
