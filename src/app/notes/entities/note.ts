export class Note {
    id: string;
    title: string = '';
    text: string = '';
    timestamp: Date | string;
    done: boolean = false;
    color?: string;
}
