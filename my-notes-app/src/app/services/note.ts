import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    notes: Note[] = [];

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

    createId = (): string => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    updateTitle(id: string, newTitle: string): void {
        const note = this.notes.find(note => note.id === id);
        if (note) note.title = newTitle;
    }

    updateMarked(id: string): void {
        const note = this.notes.find(note => note.id === id);
        if (note) note.marked = !note.marked;
    }
}
