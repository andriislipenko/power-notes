import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Note } from "./entities/note";

@Injectable()
export class NotesService {
    public showDone: boolean = false;

    private notesUrl = 'api/notes';

    constructor(private http: HttpClient) {}

    public getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.notesUrl);
    }

    public getNote(id: number): Observable<Note> {
        return this.http.get<Note>(`${this.notesUrl}/${id}`)
    }

    public searchNoteByTitle(term: string): Observable<Note[]> {
        return this.http.get<Note[]>(`${this.notesUrl}?title=${term}`);
    }

    public addNote(note: Note): Observable<Note> {
        note.timestamp = new Date();
        return this.http.post<Note>(this.notesUrl, note);
    }

    public updateNote(note: Note): Observable<Note> {
        return this.http.put<Note>(this.notesUrl, note);
    }

    public deleteNote(noteId: number): Observable<any> {
        return this.http.delete<any>(`${this.notesUrl}/${noteId}`);
    }
}
