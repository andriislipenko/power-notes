import { Component, Output, EventEmitter } from '@angular/core';
import { faPlus, IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.scss'],
})
export class ControlBarComponent {
    @Output() search: EventEmitter<string> = new EventEmitter();

    public readonly faPlus: IconDefinition = faPlus;
    public readonly faSearch: IconDefinition = faSearch;

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
}
