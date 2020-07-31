import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../entities/option';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
    @Input() options: Option[];
    @Input() hidden: boolean = true;

    @Output() select: EventEmitter<Option> = new EventEmitter();

    public onSelect(event: MouseEvent, option: Option): void {
        event.stopPropagation();
        this.select.emit(option);
    }
}
