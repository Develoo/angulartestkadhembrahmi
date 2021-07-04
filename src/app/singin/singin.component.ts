import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { User } from '../shared/services/user';



@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  @ViewChild('f') form !: NgForm;
  error: any;

  user1: User;

  constructor( 
    private authService: AuthserviceService,
    private router: Router
   ) { 
    this.error = null;

    this.user1 =new User() ;
  }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signInUser(this.form.value.email, this.form.value.password)
      .then((user) => {
        console.log(user.user)
        this.authService.setLoginStatus(true);
        this.router.navigateByUrl('video');
      })
      .catch( err => this.error = err.message );
    this.form.reset();
  }

  removeError() {
    this.error = null;
  }

}
