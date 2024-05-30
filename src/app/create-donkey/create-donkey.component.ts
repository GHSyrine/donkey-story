import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormIsValidDirective } from '../form-is-valid.directive';
import { CollectionDokeyService } from '../collection-dokey.service';
import { Donkey } from './models/donkey.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-donkey',
  standalone: true,
  imports: [ ReactiveFormsModule, FormIsValidDirective, RouterLink],
  templateUrl: './create-donkey.component.html',
  styleUrl: './create-donkey.component.css'
})
export class CreateDonkeyComponent  {

  addDonkeyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    origine: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })
  constructor(private collectionDonkeyService: CollectionDokeyService) {}
  isNameInValid() {
    return this.addDonkeyForm.controls.name.invalid
      && (this.addDonkeyForm.controls.name.dirty
        || this.addDonkeyForm.controls.name.touched)
  }

  isOrigineInValid() {
    return this.addDonkeyForm.controls.origine.invalid
      && (this.addDonkeyForm.controls.origine.dirty
        || this.addDonkeyForm.controls.origine.touched)
  }

  isBirthdateInValid() {
    return this.addDonkeyForm.controls.birthDate.invalid
      && (this.addDonkeyForm.controls.birthDate.dirty
        || this.addDonkeyForm.controls.birthDate.touched)
  }

  isImageInValid() {
    return this.addDonkeyForm.controls.image.invalid
      && (this.addDonkeyForm.controls.image.dirty
        || this.addDonkeyForm.controls.image.touched)
  }

  onSubmit() {
    if (this.addDonkeyForm.valid) {
      const donkey: Donkey = {
        name: this.addDonkeyForm.value.name || '',
        origine: this.addDonkeyForm.value.origine || '',
        birthDate: this.addDonkeyForm.value.birthDate || '',
        image: this.addDonkeyForm.value.image || ''
      };
      this.collectionDonkeyService.addDonkey(donkey);
      this.addDonkeyForm.reset();
      console.warn('Donkey added:', this.collectionDonkeyService.getDonkeys());
    }
  }
}
