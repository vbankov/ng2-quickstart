import { MainComponent } from './components/main/main.component';

export const Routes: any[] = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent }
]
