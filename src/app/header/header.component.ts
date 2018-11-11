import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from "@angular/http";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    result = this.authService.isAuthenticated();
    // creating an event for sending what navigation option user clicks on
    // EventEmitter is a generic type
    // Output directive enables the parent component to listen to the event
    // @Output() fetrureSelected = new EventEmitter<string>();

    // this method will emit an event which will allow us to know which nav menu user selected
    // onSelect(feture: string) {
    //     this.fetrureSelected.emit(feture);
    // }

    constructor( private _dataStorageService: DataStorageService,
        private authService: AuthService ) {}

    onSaveData() {
        this._dataStorageService.storeRecipe().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    fetchData() {
        this._dataStorageService.getRecipe();
    }

    onLogout() {
        this.authService.logout();
    }
}
