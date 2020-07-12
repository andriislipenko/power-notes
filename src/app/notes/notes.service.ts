import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Note } from "./entities/note";

@Injectable()
export class NotesService {
    private notesUrl = 'api/notes';

    constructor(private http: HttpClient) {}

    public getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.notesUrl);
    }

    public getNote(id: string): Observable<Note> {
        return this.http.get<Note>(`${this.notesUrl}/${id}`)
    }
}
