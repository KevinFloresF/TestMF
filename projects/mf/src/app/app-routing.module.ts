import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ShowinfoModule } from './showinfo/showinfo.module';

const routes: Routes = [
  {
  path:'',
  component: DefaultComponent

},
{
  path:'mf',
  loadChildren:()=>import('./showinfo/showinfo.module').then((m)=>m.ShowinfoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
