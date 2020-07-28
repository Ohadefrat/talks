import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as AppSettings from 'tns-core-modules/application-settings';

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {

    public input: any;

    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public ngOnInit() {
        if(AppSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    }

    public login() {
        if(this.input.email && this.input.password) {
            let account = JSON.parse(AppSettings.getString("account", "{}"));
            if(this.input.email == account.email && this.input.password == account.password) {
              AppSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
            } else {
                /*(new SnackBar()).simple("Incorrect Credentials!");*/
            }
        }/* else {
            (new SnackBar()).simple("All Fields Required!");
        }*/
    }

}