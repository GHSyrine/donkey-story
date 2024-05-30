import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormIsValid]',
  standalone: true
})
export class FormIsValidDirective implements OnInit {
@Input ('appFormIsValid') formGroup!: FormGroup;
@Input() validClass: string = 'btn-valid';
@Input() invalidClass: string = 'btn-invalid';

  constructor(private el : ElementRef, private renderer : Renderer2) { }
  ngOnInit(): void {
    // Initial class update based on the current status of the form
    this.updateButtonClass(this.formGroup.status);

    // Subscribe to status changes of the form group
    this.formGroup.statusChanges.subscribe(status => {
      this.updateButtonClass(status);
    });
  }

  private updateButtonClass(status: string): void {
    if (status === 'VALID') {
      this.renderer.addClass(this.el.nativeElement, this.validClass);
      this.renderer.removeClass(this.el.nativeElement, this.invalidClass);
    } else {
      this.renderer.addClass(this.el.nativeElement, this.invalidClass);
      this.renderer.removeClass(this.el.nativeElement, this.validClass);
    }
  }
}

