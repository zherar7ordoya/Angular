import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';
import { CreateNote } from '../../components/create-note/create-note';
import Note from '../../../models/Note';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notes',
    imports: [Header, NoteCard, CreateNote, CommonModule],
    templateUrl: './notes.html',
    styleUrl: './notes.css',
    //providers: [NoteService]
})
export class Notes implements OnInit {

    constructor(public noteService: NoteService) { }

    ngOnInit(): void {
        this.getNotes();
    }

    getNotes() {
        return this.noteService.getNotes().subscribe({
            next: data => this.noteService.notes = data,
            error: e => console.error('Error fetching notes:', e)
        })
    }
}
