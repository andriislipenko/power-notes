import { Component, OnInit, Input } from "@angular/core";
import { Note } from '../entities/note';
import { Router, ActivatedRoute } from '@angular/router';
import { IconDefinition, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "app-note",
    templateUrl: "./note.component.html",
    styleUrls: ["./note.component.scss"],
})
export class NoteComponent implements OnInit {
    public readonly DEFAULT_BACKGROUND_COLOR: string = '#e0e0e0';
    public readonly BACKGROUND_OPACITY: string = '88';

    @Input() note: Note;

    public readonly faCheckDouble: IconDefinition = faCheckDouble;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {}

    public resolveBackgroundColor(title: boolean = false): string {
        if (title) return this.note.color || this.DEFAULT_BACKGROUND_COLOR;
        
        return (this.note.color || this.DEFAULT_BACKGROUND_COLOR) + this.BACKGROUND_OPACITY;
    }

    public goToDetails(): void {
        this.router.navigate([`note/${this.note.id}`], { relativeTo: this.route });
    }

    public createNote(): void {
        this.router.navigate(['note'], { relativeTo: this.route });
    }
}
