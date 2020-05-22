import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  users: object;
  test: object;

  constructor(private formBuilder: FormBuilder, private data: DataService) { 
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }

    this.success = true;
    this.users = {
      name: this.messageForm.controls.name.value,
      message: this.messageForm.controls.message.value
    }

    this.callapi();
  }

  ngOnInit() {
  }

  callapi(){
    this.data.sendName(this.users).subscribe(data => {
      this.test = data;
      console.log(this.test)
    })
  }

}
