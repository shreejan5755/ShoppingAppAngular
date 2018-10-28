import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // host binding attaches a property or css class to the element whcih they bind to
  // here open class will be attched to the element if the isOpen is true else it wont be attached if isOpen is false
  @HostBinding('class.open') isOpen = false;

  // adding a HostListener to listen for the dropdown button click event in the host view
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
