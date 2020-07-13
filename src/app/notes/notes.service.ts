import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Note } from "./entities/note";

@Injectable()
export class NotesService {
    private notesUrl = 'api/notes';
    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {}

    public getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.notesUrl);
    }

    public getNote(id: number): Observable<Note> {
        return this.http.get<Note>(`${this.notesUrl}/${id}`)
    }

    public addNote(note: Note): Observable<Note> {
        return this.http.post<Note>(this.notesUrl, note, { headers: this.headers });
    }

    public updateNote(note: Note): Observable<Note> {
        return this.http.put<Note>(this.notesUrl, note, { headers: this.headers });
    }
}
