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

    updateTitle(id: any, e: any): void {
        this.noteService.updateTitle(id, e.target.value);
    }

    updateMarked(id: any): void {
        this.noteService.updateMarked(id);
    }


}
