import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonModal, IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Note } from 'src/app/note';
import { ListNote } from 'src/app/list-note';
import { DetailedPagePage } from "../detailed-page/detailed-page.page";
import { DatetimeModalComponent } from "../../datetime-modal/datetime-modal.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterLink, DetailedPagePage, DatetimeModalComponent]
})


export class HomePage implements OnInit {
  favorite = false;
  dateTimeValue ='';
  date='';
  time='';
  title='';

  noteService: ListNote = new ListNote()
  notes: Note[] = []

  subtaskCount: number = 0;
  subtasks: any[] = [];

  @ViewChild(IonModal) modal!: IonModal;

  constructor(public modalController: ModalController) {}
  
  async openDateTimePickerModal() {
    const modal = await this.modalController.create({
      component: DatetimeModalComponent,
    });
    return await modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    this.subtasks = [];
    this.subtaskCount = 0;
  }

  ngOnInit() {
    this.noteService.addNote(new Note(0,'to-do-list',false,'2023-03-18','15:03'));
    // this.noteService.addNote(new Note(1,'to-do-list',false,'2023-02-28','06:00'));
    // this.noteService.addNote(new Note(2,'to-do-list',false,'2023-11-09','17:07'));
    // this.noteService.addNote(new Note(3,'to-do-list',false,'2023-12-18','21:21'));
    // this.noteService.addNote(new Note(4,'to-do-list',false,'2023-01-11','10:00'));
    // this.noteService.addNote(new Note(5,'to-do-list',false,'2023-05-31','15:00'));
    this.notes = this.noteService.getAllNote();
  }
  
  addTask(){
    if (this.title !== ''){
      this.noteService.addNote(new Note(this.notes.length,this.title,false,this.date,this.time));
      this.notes = this.noteService.getAllNote();
      this.cancel();
    }
  }

  removeTask(id:number){
    this.noteService.removeNote(id);
  }

  addSubtask(){
    this.subtaskCount++;
    this.subtasks.push({ id: this.subtaskCount });
  }

  removeSubtask(id: number) {
    this.subtasks = this.subtasks.filter(subtask => subtask.id !== id);
    this.subtaskCount--;
  }


  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: { target: any; }) {
    const value = ev.target!.value;
    
    // Removes non alphanumeric characters
    const filteredValue = value;
    
    this.ionInputEl.value = this.title = filteredValue;
  }

  favoriteChanged(){
    this.favorite = !this.favorite;
  }
}
