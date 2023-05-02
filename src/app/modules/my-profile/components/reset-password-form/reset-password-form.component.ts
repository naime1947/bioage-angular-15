import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from '@shared/utilities/regex';
import { createCompareValidator } from '@shared/utilities/validators';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent implements OnInit {
  passwordFormGroup!: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.passwordFormGroup = this.fb.group({
      newPassword: ['', [Validators.pattern(Regex.password)]],
      confirmPassword: ['', [Validators.pattern(Regex.password)]],
    });

    this.passwordFormGroup.addValidators(
      createCompareValidator(
        this.passwordFormGroup.get('newPassword')!,
        this.passwordFormGroup.get('confirmPassword')!
      )
    );
  }

  get f() {
    return this.passwordFormGroup.controls;
  }
}
