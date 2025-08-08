import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note';

@Component({
    selector: 'app-note-card',
    imports: [],
    templateUrl: './note-card.html',
    styleUrl: './note-card.css'
})
export class NoteCard {

    note = input<Note>();

    constructor(public noteService: NoteService) { }

    updateTitle(id: string | undefined, e: Event) {
        console.log('updateTitle', id);
        if (!id) return;
        const inputHtml = e.target as HTMLInputElement;
        this.noteService.updateTitle(id, inputHtml.value)
    }

    updateMarked(id: string | undefined) {
        console.log('updateMarked', id);
        if (!id) return;
        this.noteService.updateMarked(id);
    }


}
