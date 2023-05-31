import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'angular14-json-form',
  templateUrl: './angular14-json-form.component.html',
  styleUrls: ['./angular14-json-form.component.css']
})
export class Angular14JsonFormComponent implements OnInit {

  @Input('title') title:String = '';
  @Input('subTitle') subTitle:String = '';
  @Input('itemPerRow') itemPerRow:number = 1;
  @Input('fields') fields:any = [];
  @Output('submitHandler') submitHandler = new EventEmitter<any>();
  @Output('fieldChangeHandler') fieldChangeHandler = new EventEmitter<any>();

  jsonForm!: FormGroup;

  constructor() {}

  globalColumnClass = 'col-span-12'

  ngOnInit(): void {
    let form:any = [];
    if(this.itemPerRow !== 1){
      this.globalColumnClass = 'col-span-'+(12/this.itemPerRow)
    }
    this.fields.map((field:any) => {
      form[field.name] = this.createCustomFormControl('', field)
    });
    this.jsonForm = new FormGroup(form)
  }

  onSubmit(){
    this.submitHandler.emit(this.jsonForm)
  }

  onFieldValueChange(field:any, value:any){
    this.fieldChangeHandler.emit({
      field:field,
      value:value
    })
  }

  createCustomFormControl(value: any, options: any): FormControl {
    const { required, readonly, disabled, defaultValue } = options;
    const control = new FormControl(value);

    if (required) {
      control.setValidators([Validators.required]);
    }

    if (readonly) {
      control.disable();
    }

    if (disabled) {
      control.disable();
    }

    if (defaultValue !== undefined) {
      control.setValue(defaultValue);
    }

    return control;
  }

}
