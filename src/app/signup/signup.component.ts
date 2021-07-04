import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  @ViewChild('f') form !: NgForm;
  error !: any;
  bad:boolean=false ;
  constructor( private authService: AuthserviceService , private toaster:ToastrService ) { 
    this.error = null;
  }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.form)
    this.authService.signUpUser(this.form.value.name,this.form.value.lastName,this.form.value.email, this.form.value.password,this.form.value.confirmPassword)
      .then( res => console.log(res)
      
      
      )
      .catch( err => this.error = err.message );
      if(this.form.valid){
        this.toaster.success( 'Registred successfully');
      }
     
    this.form.reset();
  }

  removeError() {
    this.error = null;
  }
}
