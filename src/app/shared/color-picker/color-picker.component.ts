import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
    public readonly DEFAULT_MARGIN: number = 5;

    public readonly DEFAULT_COLORS: string[] = [
        '#e0e0e0',
        '#98fb98',
        '#afeeee',
        '#fa8072'
    ];

    @Input() size: number = 25;
    @Input() set color(color: string) {
        if (!this.colors.includes(color) || this.colors.indexOf(color) === 0) return;

        this.colors.splice(this.colors.indexOf(color), 1);
        this.colors.unshift(color);
    }

    @Output() pickColor: EventEmitter<string> = new EventEmitter();

    public colors: string[] = this.DEFAULT_COLORS;
    public isOpened: boolean = false;

    @HostListener('document:click')
    onClickOutside(): void {
        this.isOpened = false;
    }

    public selectColor(color: string, event: MouseEvent): void {
        event.stopPropagation();

        if (!this.isOpened) {
            this.isOpened = true;
            return;
        }

        this.pickColor.emit(color);
        this.color = color;
        this.isOpened = false;
    }

    public calculatePickerWidth(): number {
        if (!this.isOpened) return this.size;

        let colorAmount: number = this.DEFAULT_COLORS.length;
        return (this.size + this.DEFAULT_MARGIN) * colorAmount - this.DEFAULT_MARGIN;
    }
}
