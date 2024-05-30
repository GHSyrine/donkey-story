import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateDonkeyComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'donkey-story';
}
