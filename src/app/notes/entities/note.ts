export class Note {
    id: number;
    title: string = '';
    text: string = '';
    timestamp: Date;
    done: boolean = false;

    constructor (
        id: number,
        title: string = '',
        text: string = '',
        timestamp: Date | string,
        done: boolean = false
    ) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.timestamp = timestamp instanceof Date ? timestamp : new Date(timestamp);
        this.done = done;
    }
}
