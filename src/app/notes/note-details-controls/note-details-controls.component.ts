import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { faCircleNotch, faChevronLeft, faCheck, faTrashAlt, faUndo, faCheckDouble, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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
    public readonly faEllipsisV: IconDefinition = faEllipsisV;

    public isOptions: boolean = false;

    @HostListener('document:click')
    public onDocumentClick(): void {
        this.isOptions = false;
    }

    public onSave(): void {
        this.save.emit();
    }

    public onDelete(event: MouseEvent): void {
        event.stopPropagation();
        this.delete.emit();
    }

    public onDone(event: MouseEvent): void {
        event.stopPropagation();
        this.done.emit();
    }

    public onUndoEdit(): void {
        if (this.loading) return;
        this.undoEdit.emit();
    }

    public toggleOptions(event: MouseEvent): void {
        event.stopPropagation();
        this.isOptions = !this.isOptions;
    }

    public isViewing(): boolean {
        return this.note && this.note.id && !this.editing;
    }

    public onBack(): void {
        this.back.emit();
    }
}
