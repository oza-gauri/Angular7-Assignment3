import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { GetuserService } from '../getuser.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
        registarationInfo = [];
        data = {};
        profileFormValue: any;
        formstatus: boolean;
        registrationForm: FormGroup;

        submit(event) {
        if (this.profileForm.valid) {
        this.profileFormValue = this.profileForm.value;      
        this.registarationInfo.push(this.profileForm);      
        console.log(this.registarationInfo);
        event.preventDefault();
        this.formstatus = true;
        this.profileForm.reset();
          }
        } 
        profileForm = this.fb.group({
        firstName: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
        lastName: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
        email:['',[Validators.required,Validators.email]],
        userName:['',Validators.pattern('^[a-zA-Z]+$')],
        password:['',Validators.minLength(7)],
        qualification: this.fb.group({
        education:['',Validators.required],
        college:['',Validators.required],
        university:['',Validators.required]
        }),
        address: this.fb.group({
        add1: ['',Validators.required],
        add2: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        country: ['',Validators.required],
        list:['']
        }),
      });
        constructor(private fb: FormBuilder, private _getuser:GetuserService) { }
        onSubmit () {
        console.warn(this.profileForm.value);
        }
        users
        ngOnInit() {
        this._getuser.getuser().subscribe((data:any) => {        
        console.log(data['data'][0]); 
        this.users = data
        console.log(this.users);
        });
      }
   }
