import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @Output() confirmClick: EventEmitter<any> = new EventEmitter();
  @Input() message = 'Weet je het zeker?';

  @HostListener('click', ['$event'])

    onclick($event)
    {
      const confirmed = window.confirm(this.message);

      if (confirmed) {

        console.log(this.confirmClick);

        this.confirmClick.emit();

      }
      else {
        console.log("Nee")
      }
    }


}
