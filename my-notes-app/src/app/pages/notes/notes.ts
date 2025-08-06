import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';

@Component({
    selector: 'app-notes',
    imports: [Header, NoteCard],
    templateUrl: './notes.html',
    styleUrl: './notes.css',
    providers: [NoteService]
})
export class Notes {
    constructor(public noteService: NoteService) { }
}
