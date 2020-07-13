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
    @Input() note: Note;

    public readonly faCheckDouble: IconDefinition = faCheckDouble;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {}

    public goToDetails(): void {
        this.router.navigate([`note/${this.note.id}`], { relativeTo: this.route });
    }
}
