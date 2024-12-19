import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Student } from '../user';

@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  @Input() course: String='';
  
  @Output() notifyParent = new EventEmitter<Student[]>();
  sendStudents() {
      this.notifyParent.emit(this.students);
  }
  students = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 23 }
  ];
  
}
