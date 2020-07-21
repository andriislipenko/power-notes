import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './entities/note';
import { AppSettingsService } from '../core/app-settings.service';

@Injectable()
export class NotesService {
    public showDone: boolean = false;

    private notesUrl: string;

    constructor(
        private http: HttpClient,
        private appSettingsService: AppSettingsService    
    ) {
        this.notesUrl = `${this.appSettingsService.getDefaultUrl()}/notes`
    }

    public getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.notesUrl);
    }

    public getNote(id: string): Observable<Note> {
        return this.http.get<Note>(`${this.notesUrl}/${id}`);
    }

    public searchNoteByTitle(term: string): Observable<Note[]> {
        return this.http.get<Note[]>(`${this.notesUrl}?title=${term}`);
    }

    public addNote(note: Note): Observable<Note> {
        note.timestamp = new Date();
        return this.http.post<Note>(this.notesUrl, note);
    }

    public updateNote(note: Note): Observable<Note> {
        return this.http.put<Note>(`${this.notesUrl}/${note.id}`, note);
    }

    public deleteNote(noteId: string): Observable<any> {
        return this.http.delete<any>(`${this.notesUrl}/${noteId}`);
    }
}
