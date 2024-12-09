// src/app/app.component.ts
import { Component } from '@angular/core';
import { TableauComponent } from './tableau/tableau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    TableauComponent,
    BrowserAnimationsModule
  ]
})
export class AppComponent {
  title = 'tableau-angular';
}
