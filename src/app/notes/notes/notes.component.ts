import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NotesService } from "../notes.service";
import { Note } from '../entities/note';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: "app-notes",
    templateUrl: "./notes.component.html",
    styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
    public notes: Note[] = [];
    
    public showDone: boolean = false;

    constructor(private notesService: NotesService) {}

    ngOnInit(): void {
        this.getNotes();
    }

    public onSearch(term: string): void {
        term = term.trim();

        if (!term) {
            this.getNotes();
            return;
        };

        this.notesService.searchNoteByTitle(term)
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((notes: Note[]) => of(notes))
            )
            .subscribe((notes: Note[]) => {
                this.notes = notes;
            });
    }

    public isNoteToShow(note: Note): boolean {
        return !note.done || (note.done && this.showDone);
    }

    public toggleDone(): void {
        this.showDone = !this.showDone;
    }

    private getNotes(): void {
        this.notesService.getNotes()
            .pipe(switchMap((notes: Note[]) => of(notes)))
            .subscribe((notes: Note[]) => {
                this.notes = notes;
            });
    }
}
