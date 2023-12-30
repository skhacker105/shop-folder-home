import { Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './routes'
        }).then(m => m.routes)
    },
    {
        path: 'home',
        component: AppHomeComponent
    }
];
