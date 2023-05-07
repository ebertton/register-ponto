import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'registers', loadChildren: () => import('./pages/registers/registers.module').then(m => m.RegistersModule) },
  { path: '', redirectTo: "registers", pathMatch: "full"}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
