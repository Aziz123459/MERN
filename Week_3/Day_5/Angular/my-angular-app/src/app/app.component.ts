import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { Student} from "./user"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyComponentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  course = 'Full-Stack Development';
  allStudents: Student[]= []
  onNotify(Students: Student[]) {
  this.allStudents= Students
  console.log('Student list has been updated!')
}
}
