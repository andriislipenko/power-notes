import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { OptionActions } from './option-actions.enum';

export class Option {
    constructor (
        public action: OptionActions,
        public title: string,
        public icon: IconDefinition,
        public color: string = 'black',
        public ruler: boolean = false
    ) {}
}
