import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUtilsComponent } from '@nx-playground/shared-utils';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedUtilsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app-3';
}
