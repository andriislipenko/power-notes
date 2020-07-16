import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';
import { Note } from '../entities/note';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { whiteSpaceValidator } from '../../shared/whitespace-validator';

@Component({
    selector: 'app-note-details',
    templateUrl: './note-details.component.html',
    styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit, AfterViewInit {
    @ViewChild('text')
    private textArea: ElementRef;

    public currentNoteId: number;
    public note: Note;

    public noteForm: FormGroup;

    public isLoading: boolean = false;
    public onEdit: boolean = false;

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

    public saveNote(): void {
        if (this.isDisabled()) return;

        if (this.note) {
            this.updateNote();
        } else {
            this.addNote();
        }
    }

    public deleteNote(): void {
        if (this.isLoading) return;

        this.isLoading = true;

        this.notesService
            .deleteNote(this.note.id)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe(() => this.goBack());
    }

    public makeDone(): void {
        this.updateNoteStatuses({ done: !this.note.done });
    }

    public setColor(color): void {
        this.updateNoteStatuses({ color });
    }

    public goBack(): void {
        this.location.back();
    }

    public isDisabled(): boolean {
        return this.noteForm.invalid || this.isLoading;
    }

    public setEditStatus(edit: boolean, undo: boolean = false): void {
        this.onEdit = edit;

        if (!edit && undo) {
            this.setForm(this.note);
        }
    }

    private getNote(): void {
        this.isLoading = true;

        this.notesService
            .getNote(this.currentNoteId)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe((note: Note) => {
                this.setCurrentNote(note);
            });
    }

    private addNote(): void {
        this.isLoading = true;

        this.notesService
            .addNote(this.noteForm.getRawValue())
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe((note: Note) => {
                this.setCurrentNote(note);
                this.setEditStatus(false);
            });
    }

    private updateNote(): void {
        this.isLoading = true;

        let formValues: Note = this.noteForm.getRawValue();
        let noteUpdate: Note = this.note;

        noteUpdate.title = formValues.title;
        noteUpdate.text = formValues.text;

        this.notesService
            .updateNote(noteUpdate)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe(() => {
                this.note = noteUpdate;
                this.setEditStatus(false);
            });
    }

    private updateNoteStatuses(statuses: { done?: boolean, color?: string }): void {
        if (this.isLoading) return;

        this.isLoading = true;

        let noteUpdate: Note = { ...this.note };

        if (statuses) {
            noteUpdate.done = 'done' in statuses ? statuses.done : noteUpdate.done;
            noteUpdate.color = statuses.color ? statuses.color : noteUpdate.color
        }

        this.notesService
            .updateNote(noteUpdate)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe(() => {
                this.note = noteUpdate;
            });
    }

    private setCurrentNote(note: Note): void {
        this.note = note;
        this.setForm(note);
    }

    private getNoteId(): void {
        this.currentNoteId = +this.route.snapshot.paramMap.get('noteId');
        this.currentNoteId = isNaN(this.currentNoteId)
            ? null
            : this.currentNoteId;
    }

    private setForm(note: Note): void {
        this.noteForm.setValue({
            title: note.title,
            text: note.text,
        });
    }

    private startTextAreaAutoResize(): void {
        this.noteForm.get('text').valueChanges.subscribe((text: string) => {
            if (!this.textArea) return;
            this.textArea.nativeElement.style.height = 'auto';
            this.textArea.nativeElement.style.height = `${this.textArea.nativeElement.scrollHeight}px`;
        });
    }

    private buildForm(): void {
        this.noteForm = this.formBuilder.group({
            title: ['', [Validators.required, whiteSpaceValidator()]],
            text: [''],
        });
    }
}
