import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCircleNotch, faChevronLeft, faCheck, faTrashAlt, faUndo, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Note } from '../entities/note';

@Component({
    selector: 'app-note-details-controls',
    templateUrl: './note-details-controls.component.html',
    styleUrls: ['./note-details-controls.component.scss'],
})
export class NoteDetailsControlsComponent {
    @Input() note: Note;
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() editing: boolean = false;
    
    @Output() back: EventEmitter<void> = new EventEmitter();
    @Output() save: EventEmitter<void> = new EventEmitter();
    @Output() delete: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();
    @Output() undoEdit: EventEmitter<void> = new EventEmitter();

    public readonly faChevronLeft: IconDefinition = faChevronLeft;
    public readonly faCircleNotch: IconDefinition = faCircleNotch;
    public readonly faCheck: IconDefinition = faCheck;
    public readonly faCheckDouble: IconDefinition = faCheckDouble;
    public readonly faTrashAlt: IconDefinition = faTrashAlt;
    public readonly faUndo: IconDefinition = faUndo;

    public onSave(): void {
        this.save.emit();
    }

    public onDelete(): void {
        this.delete.emit();
    }

    public onDone(): void {
        this.done.emit();
    }

    public onUndoEdit(): void {
        if (this.loading) return;
        this.undoEdit.emit();
    }

    public onBack(): void {
        this.back.emit();
    }

    public isViewing(): boolean {
        return this.note && this.note.id && !this.editing;
    }
}
