import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { IconDefinition, faSearch, faCheckDouble, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Option } from 'src/app/shared/entities/option';
import { OptionActions } from 'src/app/shared/entities/option-actions.enum';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.scss'],
})
export class ControlBarComponent {
    @Input() set showDone(showDone: boolean) {
        this.initOptions(showDone);
    }

    @Output() search: EventEmitter<string> = new EventEmitter();
    @Output() toggleDone: EventEmitter<void> = new EventEmitter();

    public readonly faSearch: IconDefinition = faSearch;
    public readonly faCheckDouble: IconDefinition = faCheckDouble;
    public readonly faEllipsisV: IconDefinition = faEllipsisV;

    public options: Option[];
    public isOptions: boolean = false;

    @HostListener('document:click')
    onDocumentClick() {
        this.isOptions = false;
    }

    public onSearch(term: string): void {
        this.search.emit(term);
    }

    public onSelectOption(option: Option): void {
        switch (option.action) {
            case OptionActions.Done:
                this.toggleDone.emit();
                break; 
        }
        this.isOptions = false;
    }

    public toggleOptions(event: MouseEvent): void {
        event.stopPropagation();
        this.isOptions = !this.isOptions;
    }

    private initOptions(showDone: boolean = false): void {
        this.options = [
            new Option(
                OptionActions.Done,
                showDone ? 'Hide done' : 'Show done',
                faCheckDouble,
                showDone ? 'limegreen' : 'lightgray'
            )
        ]
    }
}
