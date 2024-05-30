import { Component, OnInit } from '@angular/core';
import { AdoptDonkeyService } from '../adopt-donkey.service';
import { Donkey } from '../create-donkey/models/donkey.model';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-user-donkey',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-donkey.component.html',
  styleUrl: './user-donkey.component.css'
})
export class UserDonkeyComponent implements OnInit{
userDonkeys : Donkey [] = [];

constructor(private adoptDonkeyService : AdoptDonkeyService){}

ngOnInit(): void {
  this.userDonkeys = this.adoptDonkeyService.getUserDonkeys();
}
}
