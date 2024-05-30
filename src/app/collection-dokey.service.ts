import { Injectable } from '@angular/core';
import { Donkey } from './create-donkey/models/donkey.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionDokeyService {
private donkeys: Donkey[]= [];
addDonkey(donkey : Donkey){
  this.donkeys.push(donkey);
}

removeDonkey(donkey : Donkey){
  this.donkeys = this.donkeys.filter(d => d !== donkey)
}

getDonkeys():Donkey[]{
  return this.donkeys;
}
}
