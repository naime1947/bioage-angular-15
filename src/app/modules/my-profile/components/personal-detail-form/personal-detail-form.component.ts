import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetailModel } from '@shared/models/personal-detail.model';

@Component({
  selector: 'app-personal-detail-form',
  templateUrl: './personal-detail-form.component.html',
  styleUrls: ['./personal-detail-form.component.scss'],
})
export class PersonalDetailFormComponent implements OnInit {
  personalDetailFormGroup!: FormGroup;

  @Input() personalDetail!: PersonalDetailModel;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.personalDetailFormGroup = this.fb.group({
      displayName: [
        this.personalDetail?.displayName,
        [Validators.required, Validators.minLength(4)],
      ],
      email: [
        this.personalDetail?.email,
        [
          Validators.required,
          Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
          ),
        ],
      ],
      phone: [this.personalDetail?.phone, [Validators.required]],
      country: [this.personalDetail?.country, [Validators.required]],
    });

    this.f['country'].disable();
  }

  get f() {
    return this.personalDetailFormGroup.controls;
  }
}
