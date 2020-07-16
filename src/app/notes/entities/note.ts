export class Note {
    id: number;
    title: string = '';
    text: string = '';
    timestamp: Date | string;
    done: boolean = false;
    color?: string;
}
