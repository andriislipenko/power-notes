import { Component } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.scss'],
})
export class ControlBarComponent {
    public readonly faPlus: IconDefinition = faPlus;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public createNote(): void {
        this.router.navigate(['note'], { relativeTo: this.route });
    }
}
