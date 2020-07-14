import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faPlus, IconDefinition, faSearch, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.scss'],
})
export class ControlBarComponent {
    @Input() showDone: boolean = false;

    @Output() search: EventEmitter<string> = new EventEmitter();
    @Output() toggleDone: EventEmitter<void> = new EventEmitter();

    public readonly faPlus: IconDefinition = faPlus;
    public readonly faSearch: IconDefinition = faSearch;
    public readonly faCheckDouble: IconDefinition = faCheckDouble;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public createNote(): void {
        this.router.navigate(['note'], { relativeTo: this.route });
    }

    public onSearch(term: string): void {
        this.search.emit(term);
    }

    public onToggleDone(): void {
        this.toggleDone.emit();
    }

    public resolveDoneSwitchTitle(): string {
        return this.showDone ? 'hide done' : 'show done';
    }
}
