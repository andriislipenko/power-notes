import { Component, OnInit, Input } from "@angular/core";
import { Note } from '../entities/note';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-note",
    templateUrl: "./note.component.html",
    styleUrls: ["./note.component.scss"],
})
export class NoteComponent implements OnInit {
    @Input() note: Note;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {}

    public goToDetails(): void {
        this.router.navigate([`${this.note.id}`], { relativeTo: this.route });
    }
}
