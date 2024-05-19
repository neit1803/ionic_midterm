import { Note } from "./note";

export class ListNote {
    Notes: Note[] = []

    constructor() {
    }


    addNote(note:Note){
        this.Notes.push(note);
    }

    removeNote(id: number){
        this.Notes.forEach((tmp)=> {
            if (tmp.id == id)   {
                this.Notes.pop();
            }
        })
    }

    getAllNote(){
        return this.Notes;
    }
}
