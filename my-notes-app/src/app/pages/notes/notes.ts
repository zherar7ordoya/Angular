import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';
import { CreateNote } from '../../components/create-note/create-note';

@Component({
    selector: 'app-notes',
    imports: [Header, NoteCard, CreateNote],
    templateUrl: './notes.html',
    styleUrl: './notes.css',
    //providers: [NoteService]
})
export class Notes {
    constructor(public noteService: NoteService) { }
}
