import { Component } from '@angular/core';
import { ListDonkeyComponent} from '../list-donkey/list-donkey.component';
import { UserDonkeyComponent } from '../user-donkey/user-donkey.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListDonkeyComponent, UserDonkeyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
