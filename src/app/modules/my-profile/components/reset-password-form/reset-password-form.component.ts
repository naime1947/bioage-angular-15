import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent implements OnInit {
  passwordForm!: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      newPassword: [
        '',
        [
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
          ),
        ],
      ],
    });
  }

  get f() {
    return this.passwordForm.controls;
  }

}
