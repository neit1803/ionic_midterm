import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {format, parseISO} from 'date-fns';
import { Note } from 'src/app/note';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.page.html',
  styleUrls: ['./detailed-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailedPagePage implements OnInit {

  dismissTimePicker() {
    throw new Error('Method not implemented.');
  }
  
  public id!: string;
  private activatedRoute = inject(ActivatedRoute);
  showDatePicker = false;
  showTimePicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  timeValue = '';
  formattedString = '';

  subtaskCount: number = 0;
  subtasks: any[] = [];
  
  @Input() note!: Note;

  constructor() {
    this.setToday();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  setToday(){
    this.formattedString = format(new Date(), 'yyyy-MM-dd');
  }

  dateChanged(value: any){
    this.dateValue = value;
    console.log(value);
  }

  timeChanged(value:any){
    this.timeValue = value.split('T')[1];
    this.timeValue = this.timeValue.slice(0,5);
    console.log(this.timeValue);
  }

  addSubTask(){
    this.subtaskCount++;
    this.subtasks.push({ id: this.subtaskCount });
  }

  removeSubtask(id: number) {
    this.subtasks = this.subtasks.filter(subtask => subtask.id !== id);
    this.subtaskCount--;
  }

}
