import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(''),
      cognome: this.fb.control(''),
      password: this.fb.control(''),
      confermaPassword: this.fb.control(''),
      genere: this.fb.control(''),
      ImmagineProfilo: this.fb.control(''),
      biografia: this.fb.control(''),
      username: this.fb.control(''),
    });
  }
  sand() {
    console.log(this.form.value);
  }
}
