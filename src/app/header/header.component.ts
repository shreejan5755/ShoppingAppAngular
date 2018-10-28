import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    // creating an event for sending what navigation option user clicks on
    // EventEmitter is a generic type
    // Output directive enables the parent component to listen to the event
    @Output() fetrureSelected = new EventEmitter<string>();

    // this method will emit an event which will allow us to know which nav menu user selected
    onSelect(feture: string) {
        this.fetrureSelected.emit(feture);
    }
}
