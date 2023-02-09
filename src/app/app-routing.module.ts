import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'task', loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule) },
    { path: '', pathMatch: 'full', redirectTo: 'task' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
