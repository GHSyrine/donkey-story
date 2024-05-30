import { Injectable } from '@angular/core';
import { Donkey } from './create-donkey/models/donkey.model';


@Injectable({
  providedIn: 'root'
})
export class AdoptDonkeyService {
private userDonkeys : Donkey[] = [];
  constructor() { }

  adoptDonkey(donkey : Donkey){
    this.userDonkeys.push(donkey);
  }

  getUserDonkeys(): Donkey[]{
    return this.userDonkeys;
  }
}
