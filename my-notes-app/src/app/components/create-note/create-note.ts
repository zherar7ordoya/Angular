import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { NoteService } from '../../services/note';
import Note from '../../../models/Note';

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.html',
    styleUrl: './create-note.css'
})
export class CreateNote {

    noteTitle: string = '';

    constructor(
        public noteService: NoteService,
        @Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef
    ) { }

    handleSubmit = () => {
        if (!this.noteTitle.trim()) return;

        const newNote: Note = {
            id: this.noteService.createId(),
            title: this.noteTitle,
            marked: false
        };
        this.createNote(newNote);
        this.noteTitle = '';
    }

    createNote(newNote: Note) {
        this.noteService.createNote(newNote).subscribe({
            next: () => {
                this.getNotes();
                this.noteTitle = '';
            },
            error: e => {
                console.error(e);
            }
        });
    }

    getNotes() {
        this.noteService.getNotes().subscribe({
            next: data => {
                this.noteService.notes = data;
                this.changeDetector.detectChanges();
            },
            error: e => console.error('Error fetching notes:', e)
        });
    }
}
