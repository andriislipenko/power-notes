import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';
import { Note } from '../entities/note';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.scss"],
})
export class NoteDetailsComponent implements OnInit {
    public readonly faArrowLeft: IconDefinition = faArrowLeft;

    public currentNoteId: string;
    public note: Note;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private notesService: NotesService
    ) {}

    ngOnInit(): void {
        this.getNoteId();

        if (this.currentNoteId) {
            this.getNote();
        }
    }

    public goBack(): void {
        this.location.back();
    }

    private getNote(): void {
        this.notesService.getNote(this.currentNoteId).subscribe((note: Note) => {
            this.note = note;
        });
    }

    private getNoteId(): void {
        this.currentNoteId = this.route.snapshot.paramMap.get('noteId');
    }
}
