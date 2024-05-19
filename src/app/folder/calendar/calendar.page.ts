import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuBarComponent]
})
export class CalendarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
