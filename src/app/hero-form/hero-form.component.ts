import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../hero';
import { Phone } from '../phone';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet', new Phone('mobile', '+7-911-911-0-911'));

  submitted = false;

  heroForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    alterEgo: [null],
    power: [null, Validators.required],
    phone: this.fb.group({
      type: [null],
      number: [null]
    })
  });

  constructor(private fb: FormBuilder) {
    this.heroForm.setValue({
      name: this.model.name,
      alterEgo: this.model.alterEgo,
      power: this.model.power,
      phone: this.model.phone
    });
  }

  onSubmit() { this.submitted = true; }

  newHero() {
   this.heroForm.patchValue(new Hero(42, '', '', '', new Phone('', '')));
  }
}
