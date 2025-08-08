import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    notes: Note[];

    constructor() {
        this.notes = [
            {
                id: this.createId(),
                title: 'First Note',
                marked: false
            },
            {
                id: this.createId(),
                title: 'Second Note',
                marked: true
            },
            {
                id: this.createId(),
                title: 'Third Note',
                marked: false
            },
            {
                id: this.createId(),
                title: 'Fourth Note',
                marked: true
            },
            {
                id: this.createId(),
                title: 'Fifth Note',
                marked: false
            }
        ];
    }

    createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

    updateTitle(id: string, newTitle: string) {
        const updatedNote = this.notes.find((note) => note.id === id);
        if (!updatedNote) return;
        updatedNote.title = newTitle;
    }

    updateMarked(id: string) {
        const updatedNote = this.notes.find((note) => note.id === id);
        if (!updatedNote) return;
        updatedNote.marked = !updatedNote.marked;
    }

    createNote(note: Note) {
        this.notes.unshift(note);
    }
}
