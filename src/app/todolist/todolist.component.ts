import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  arrTasks = [{name: 'Task1', isCompleted: false}];

  constructor() {}

  onSubmit(form: NgForm){
    this.arrTasks.push({
      name: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }
  onDelete(index: number){
    this.arrTasks.splice(index, 1);

  }
  ngOnInit(): void {

  }
  onCheck(index: number){
    this.arrTasks[index].isCompleted = !this.arrTasks[index].isCompleted;
  }
}

