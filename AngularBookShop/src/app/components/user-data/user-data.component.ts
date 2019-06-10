import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserData } from "src/app/models/user-data";

@Component({
  selector: "user-data",
  templateUrl: "./user-data.component.html",
  styleUrls: ["./user-data.component.scss"]
})
export class UserDataComponent implements OnInit {

  userDataForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(2)
    ]),
  });

  constructor() {}

  ngOnInit() {}
}
