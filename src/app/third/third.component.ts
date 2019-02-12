import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;

  constructor() {
    this.formBuilder = new FormBuilder();
    // Initialisation is the setValidators.
    this.firstnameCtrl = new FormControl();
    this.firstnameCtrl.setValidators(
      [Validators.required]
    );
    // Initialisation in the FormControl constructor.
    this.lastnameCtrl = new FormControl('', [Validators.minLength(4)]);
    this.formGroup = this.formBuilder.group({
      firstname: this.firstnameCtrl,
      lastname: this.lastnameCtrl
    });
  }

  ngOnInit() {
    console.log(this.formGroup);
    console.log(this.formGroup.controls);
  }

}
