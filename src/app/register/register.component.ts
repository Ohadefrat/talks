import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as AppSettings from 'tns-core-modules/application-settings';

@Component({
    moduleId: module.id,
    selector: "ns-register",
    templateUrl: "register.component.html",
})
export class RegisterComponent {

    public input: any;

    public constructor(private location: Location) {
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        }
    }

    public register() {
        if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
          AppSettings.setString("account", JSON.stringify(this.input));
            this.location.back();
        } /*else {
            (new SnackBar()).simple("All Fields Required!");
        }*/
    }

    public goBack() {
        this.location.back();
    }

}