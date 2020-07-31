import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import { faCircleNotch, faChevronLeft, faCheck, faTrashAlt, faUndo, faCheckDouble, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Note } from '../entities/note';
import { Option } from 'src/app/shared/entities/option';
import { OptionActions } from 'src/app/shared/entities/option-actions.enum';

@Component({
    selector: 'app-note-details-controls',
    templateUrl: './note-details-controls.component.html',
    styleUrls: ['./note-details-controls.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NoteDetailsControlsComponent {
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() editing: boolean = false;
    
    @Input() set note(note: Note) {
        this.currentNote = note;

        if (note) this.initOptions();
    };
    
    @Output() back: EventEmitter<void> = new EventEmitter();
    @Output() save: EventEmitter<void> = new EventEmitter();
    @Output() delete: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();
    @Output() undoEdit: EventEmitter<void> = new EventEmitter();
    @Output() onSetColor: EventEmitter<string> = new EventEmitter();

    public readonly faChevronLeft: IconDefinition = faChevronLeft;
    public readonly faCircleNotch: IconDefinition = faCircleNotch;
    public readonly faCheck: IconDefinition = faCheck;
    public readonly faUndo: IconDefinition = faUndo;
    public readonly faEllipsisV: IconDefinition = faEllipsisV;

    public currentNote: Note;
    public options: Option[];
    public isOptions: boolean = false;

    @HostListener('document:click')
    public onDocumentClick(): void {
        this.isOptions = false;
    }

    public onSave(): void {
        this.save.emit();
    }

    public onOptionSelected(option: Option): void {
        switch (option.action) {
            case OptionActions.Done:
                this.done.emit();
                break;
            case OptionActions.Delete:
                this.delete.emit();
                break;
        }
        this.isOptions = false;
    }

    
    public onUndoEdit(): void {
        if (this.loading) return;
        this.undoEdit.emit();
    }
    
    public setColor(color: string): void {
        this.onSetColor.emit(color);
    }
    
    public toggleOptions(event: MouseEvent): void {
        event.stopPropagation();
        this.isOptions = !this.isOptions;
    }
    
    public isViewing(): boolean {
        return this.currentNote && this.currentNote.id && !this.editing;
    }
    
    public onBack(): void {
        this.back.emit();
    }

    private initOptions(): void {
        this.options = [
            new Option(
                OptionActions.Done,
                this.currentNote.done ? 'Mark undone' : 'Mark done',
                faCheckDouble,
                this.currentNote.done ? 'limegreen' : 'lightgray',
                true
            ),
            new Option(
                OptionActions.Delete,
                'Remove note',
                faTrashAlt,
                'tomato'
            )
        ]
    }
}
