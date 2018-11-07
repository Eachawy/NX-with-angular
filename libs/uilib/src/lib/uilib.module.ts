import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { loginComponent } from '../';
export const uilibRoutes: Route[] = [
  { path: 'login', component: loginComponent }
];

@NgModule({
  declarations: [loginComponent],
  imports: [CommonModule, RouterModule.forChild(uilibRoutes)],
  exports: [loginComponent]
})
export class UilibModule {}
