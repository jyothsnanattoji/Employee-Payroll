import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-cnb',
  templateUrl: './employee-cnb.component.html',
  styleUrls: ['./employee-cnb.component.css']
})

@Input() 
export class EmployeeCnbComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
}
}

