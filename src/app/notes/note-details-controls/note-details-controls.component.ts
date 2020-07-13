import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCircleNotch, faChevronLeft, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
    selector: 'app-note-details-controls',
    templateUrl: './note-details-controls.component.html',
    styleUrls: ['./note-details-controls.component.scss'],
})
export class NoteDetailsControlsComponent implements OnInit {
    @Input() noteId: number;
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    
    @Output() back: EventEmitter<void> = new EventEmitter();
    @Output() save: EventEmitter<void> = new EventEmitter();
    @Output() delete: EventEmitter<void> = new EventEmitter();

    public readonly faChevronLeft: IconDefinition = faChevronLeft;
    public readonly faCircleNotch: IconDefinition = faCircleNotch;
    public readonly faCheck: IconDefinition = faCheck;
    public readonly faTrashAlt: IconDefinition = faTrashAlt;

    public onSave(): void {
        this.save.emit();
    }

    public onDelete(): void {
        this.delete.emit();
    }

    public onBack(): void {
        this.back.emit();
    }
}
