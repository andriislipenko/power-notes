import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from "rxjs";
import { Note } from './notes/entities/note';

import notes from '../assets/notes-mock.json';

@Injectable()
export class InMemoryNotesDbService implements InMemoryDbService {
    constructor() {}

    createDb(reqInfo?: RequestInfo): Observable<{ notes: Note[] }> {
        return of({ notes });
    }
}
