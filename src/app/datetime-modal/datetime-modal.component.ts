import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { DetailedPagePage } from '../folder/detailed-page/detailed-page.page';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-datetime-modal',
  templateUrl: './datetime-modal.component.html',
  styleUrls: ['./datetime-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, DetailedPagePage]
})
export class DatetimeModalComponent  implements OnInit {
  dateValue ='';
  timeValue ='';

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
    
  }

  confirmDateTime() {
    this.modalController.dismiss();
  }

  dateTimeChanged(value: any){
    console.log(format(parseISO(value), 'dd-MM-yyyy'));
  }

  timeChanged(value:any){
    this.timeValue = value.split('T')[1];
    this.timeValue = this.timeValue.slice(0,5);
    console.log(this.timeValue);
  }
  
  dismissTimePicker() {
    this.timeValue ='';
  }
}
