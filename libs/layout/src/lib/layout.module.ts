import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loginComponent } from '../';
@NgModule({
  declarations:[loginComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: 'login', pathMatch: 'full', component: loginComponent} 
    ])
  ],
  exports: [loginComponent]
})
export class LayoutModule {}
