import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';
import { Note } from '../entities/note';
import { faCircleNotch, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators'

@Component({
    selector: "app-note-details",
    templateUrl: "./note-details.component.html",
    styleUrls: ["./note-details.component.scss"],
})
export class NoteDetailsComponent implements OnInit, AfterViewInit {
    @ViewChild('text')
    private textArea: ElementRef;

    public readonly faChevronLeft: IconDefinition = faChevronLeft;
    public readonly faCircleNotch: IconDefinition = faCircleNotch;

    public currentNoteId: string;
    public note: Note;

    public noteForm: FormGroup;

    public isLoading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
        private notesService: NotesService
    ) {}

    ngOnInit(): void {
        this.buildForm();
        this.getNoteId();

        if (this.currentNoteId) {
            this.getNote();
        }
    }

    ngAfterViewInit(): void {
        this.startTextAreaAutoResize();
    }

    public goBack(): void {
        this.location.back();
    }

    private getNote(): void {
        this.isLoading = true;

        this.notesService.getNote(this.currentNoteId)
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((note: Note) => {
                this.note = note;
                this.setForm(note);
            });
    }

    private getNoteId(): void {
        this.currentNoteId = this.route.snapshot.paramMap.get('noteId');
    }

    private setForm(note: Note): void {
        this.noteForm.setValue({
            title: note.title,
            text: note.text
        });
    }

    private startTextAreaAutoResize(): void {
        this.noteForm.get('text').valueChanges.subscribe((text: string) => {
            if (!this.textArea) return;
            this.textArea.nativeElement.style.height = 'auto';
            this.textArea.nativeElement.style.height = `${this.textArea.nativeElement.scrollHeight}px`;
        })
    }

    private buildForm(): void {
        this.noteForm = this.formBuilder.group({
            title: ['', Validators.required],
            text: ['']
        })
    }
}
