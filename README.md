<img src="icon.png" align="right" />

# Angular14 JSON FORM [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)
> Generate angular reactive form from JSON with tons of dynamic properties and custom event handler
![image](https://github.com/abhigdrv/angular14-json-form/assets/52538014/c61cba48-5a33-445a-b935-943da2232200)

# Documentation
> Installing angular14-json-form
> npm i angular14-json-form
> Adding in your component.ts file
> ``` title = 'libraryValidator';
  fields:any = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'John Doe',
      minLength: 3,
      minMessage: 'Name must be at least 3 characters long',
      maxLength: 20,
      maxMessage: 'Name must be at most 20 characters long',
      pattern: '^[a-zA-Z ]+$',
      patternMessage: 'Name can only contain alphabets',
      validations: {},
      validationMessages: {},
      placeholder: 'Enter Name',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'xyz@default.com',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: 'Enter Email',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'xyz@default.com',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: 'Enter Email',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    },
    {
      name: 'married',
      type: 'checkbox',
      label: 'Married',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'yes',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:'',
      options:[
        {
          label:'Married',
          value:true
        },
        {
          label:'Unmarried',
          value:false
        }
      ]
    },
    {
      name: 'gender',
      type: 'radio',
      label: 'Gender',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'male',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:'',
      options:[
        {
          label:'Male',
          value:'male'
        },
        {
          label:'Female',
          value:'female'
        }
      ]
    },
    {
      name: 'ageGroup',
      type: 'select',
      label: 'Age Group',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: '0-10',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:'',
      options:[
        {
          label:'0-10',
          value:'0-10'
        },
        {
          label:'10-20',
          value:'10-20'
        }
      ]
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Bio',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: 'I am xyz, I have done this ...',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: '03-02-2023',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    },
    {
      name: 'submit',
      type: 'submit',
      label: '',
      required: true,
      disabled: false,
      readonly: false,
      isVisible: true,
      defaultValue: '03-02-2023',
      minLength: null,
      minMessage: '',
      maxLength: null,
      maxMessage: '',
      pattern: null,
      patternMessage: '',
      validations: {},
      validationMessages: {},
      placeholder: '',
      size:'',
      autofocus:'',
      filedWidth:null,
      customClass:''
    }
  ]

  submitHandler(from:FormGroup){
    console.log(from, 'in app component')
  }
  fieldChangeHandler(val:any){
    console.log(val, 'field updated')
  } ```
 > Adding in your component.html file
 > ``` <angular14-json-form
          [title]="'Smart Form'"
          [subTitle]="'Form is build by using JSON'"
          [fields]="fields"
          [itemPerRow]="1"
          (submitHandler)="submitHandler($event)"
          (fieldChangeHandler)="fieldChangeHandler($event)"
        ></angular14-json-form> ```
