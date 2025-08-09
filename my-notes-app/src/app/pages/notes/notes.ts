import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from '../../components/header/header';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';
import { CreateNote } from '../../components/create-note/create-note';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notes',
    imports: [Header, NoteCard, CreateNote, CommonModule],
    templateUrl: './notes.html',
    styleUrl: './notes.css',
})

export class Notes implements OnInit {

    constructor(
        public noteService: NoteService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.getNotes();
    }

    getNotes() {
        if (this.noteService.notes.length > 0) {
            // Ya tenemos notas cargadas, forzamos refresco de vista por si hace falta
            this.cd.detectChanges();
            return;
        }
        return this.noteService.getNotes().subscribe({
            next: data => {
                this.noteService.notes = data;
                this.cd.detectChanges();
            },
            error: e => console.error('Error fetching notes:', e)
        });
    }
}
