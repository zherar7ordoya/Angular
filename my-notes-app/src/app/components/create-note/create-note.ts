import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import Note from '../../../models/Note';

@Component({
    selector: 'app-create-note',
    imports: [FormsModule],
    templateUrl: './create-note.html',
    styleUrl: './create-note.css'
})
export class CreateNote {
    noteTitle: string = '';

    constructor(public noteService: NoteService) { }

    handleSubmit = () => {

        if (!this.noteTitle.trim()) return;

        const newNote: Note = {
            id: this.noteService.createId(),
            title: this.noteTitle,
            marked: false
        };
        this.noteService.createNote(newNote);
    }
}
