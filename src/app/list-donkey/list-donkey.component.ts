import { Component, OnInit } from '@angular/core';
import { CollectionDokeyService } from '../collection-dokey.service';
import { Donkey } from '../create-donkey/models/donkey.model';
import { AdoptDonkeyService } from '../adopt-donkey.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-donkey',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-donkey.component.html',
  styleUrl: './list-donkey.component.css'
})
export class ListDonkeyComponent implements OnInit{
donkeys : Donkey[]=[];
showInfo : boolean = false;
constructor(private collectionDonkeyService : CollectionDokeyService,
  private adoptDonkeyService : AdoptDonkeyService
){}
ngOnInit(){
  this.donkeys = this.collectionDonkeyService.getDonkeys();
}

adoptDonkey(donkey: Donkey) {
  this.collectionDonkeyService.removeDonkey(donkey);
  this.adoptDonkeyService.adoptDonkey(donkey);
  this.donkeys = this.collectionDonkeyService.getDonkeys();
}
}
