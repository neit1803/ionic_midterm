export class Note {
    id : number
    title : string
    isDone : boolean
    subTasks: {
        id:number
        isDone: boolean
        subTask: string
    }[] = []
    detailUrl: string = ''
    date: string
    timeReminder: string

    constructor(id: number, title: string, isDone: boolean, date: string, timeReminder: string){
        this.id = id;
        this.title = title;
        this.isDone = false;
        this.isDone = isDone;
        this.date = date;
        this.timeReminder = timeReminder;
        this.detailUrl = "['/home/" + this.id+ "']"
    }

    maskDoneNote(){
        this.isDone=true;
    }

    maskDoneSubTask(id: number){
        
    }

    updateNote(note: Note){
        this.title = note.title;
        this.isDone = note.isDone;
        this.subTasks = note.subTasks;
        this.date = note.date;
        this.timeReminder = note.timeReminder;
    }
}
