import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideoComponent } from './list-video/list-video.component';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SinginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'video', component: ListVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
